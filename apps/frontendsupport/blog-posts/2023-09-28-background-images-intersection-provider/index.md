---
meta:
  title: Lazy loading CSS background images with low-quality image placeholders (LQIP) in a React Application with the IntersectionObserver
  description:
  date: "2023-09-28T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1695913334/IntersectionObserver_uowf3b.png"
  tags: ["performance", "react", "typescript"]
---

In a recent post titled [5 Things that should be Automated in a TypeScript/Javascript Monorepo](https://frontendrescue.com/posts/2023-09-04-5-things-to-automate), I mentioned the importance of automating performance testing.

I like adding performance metrics as a git comment on every pull request commit to highlight any problems. I used [webpagetest](https://www.webpagetest.org/) to run the tests, and the results highlighted the unnecessary loading of all the large images on the site's home page.

![webpage test results](https://res.cloudinary.com/ddospxsc8/image/upload/v1695914718/webpagetest-images_glttuy.png).

The home page comprises five large background images, with each image filling the whole viewport as the user scrolls down. Loading them all up front is not good practice. A better idea is to lazy load the images as the user scrolls down the page.

## Why not use the img tag's loading attribute?

The loading attribute on an `<img>` element can be used to instruct the browser to defer the loading of off-screen images until the user scrolls near them.

```html
<img src="image.jpg" alt="lazy loaded" loading="lazy" />
```

Unfortunately, the large images in question are set using `background-image` CSS property:

```css
background-image: url(https://res.cloudinary.com/ddospxsc8/image/upload/v1690025905/struggle_yderkl.png);
```

## Low Quality Image Placeholders (LQIP)

Lazy loading is one part of the challenge, and the other is to prevent the user from staring at a blank space until the image has loaded. It is currently good practice to provide a low-quality blurred image that bares a representation of the actual image, like you can see on my blog listing below:

![blurred images](https://res.cloudinary.com/ddospxsc8/image/upload/v1695918932/blurhash_vnbpuj.png).

### blurhash

[blurhash](https://blurha.sh/) generates compact representations of a placeholder for an image. Generating blurhashes is not the sort of operation you want to do at runtime, and all my images are stored in [cloudinary](https://cloudinary.com/ip/gr-sea-gg-brand-home-base) so I created [this npm package](https://www.npmjs.com/package/@cutting/cloudinary-blurhash) that will iterate all the images of a cloudinary account and create a JSON file with the image properties and the burhash that looks like this:

```json showLineNumbers {5}
[
  {
    "id": "blurhash_vnbpuj.png",
    "url": "https://res.cloudinary.com/acc/image/upload/v666/blurhash.png",
    "blurhash": "UG8}0+_N-;xvxaocWAaxIVIVIUM{WBfRWAWB",
    "width": 600,
    "height": 231
  },
  ...
]
```

BlurHash takes an image and gives you a short string (only 20-30 characters!) that represents the placeholder for this image. The string is highlighted on line 5 of the above code sample.

For HTML `img` elements, I use this `LazyLoadedImage` component that is listed below:

```tsx showLineNumbers {1,2,18,22,30}
import { blurhashToGradientCssObject } from "@unpic/placeholder";
import { Image, type ImageProps } from "@unpic/react";
import { useMemo } from "react";
import { getImagePropsFromMap } from "./getImagePropsFromMap";

type Layout = ImageProps["layout"];

type LazyLoadedImageProps = Omit<ImageProps, "layout"> & {
  layout?: Layout;
} & React.RefAttributes<HTMLImageElement>;

export function LazyLoadedImage({
  src,
  width,
  height,
  loading = "lazy",
  layout = "constrained",
  ...props
}: LazyLoadedImageProps): JSX.Element {
  const image = getImagePropsFromMap(src);

  const { blurhash, ...imageProps } = image;

  const placeholderStyle = useMemo(
    () => blurhashToGradientCssObject(blurhash),
    [blurhash]
  );

  return (
    <Image
      loading={loading}
      layout={layout as any}
      width={width ?? imageProps.width}
      height={height ?? imageProps.height}
      style={placeholderStyle}
      src={src}
      {...props}
    />
  );
}
```

I use [@unpic/placeholder](https://github.com/ascorbic/unpic-placeholder) to transform the blurhash into a style object that I pass as a prop to the [@unpic/react](https://github.com/ascorbic/unpic-img) component that I use for responsive images.

I get the blurhash from the JSON file I generated with my package on line 18.

The `blurhashToGradientCssObject` function will return the style object from the blurhash on line 22.

The rendered CSS will look something like this:

```HTML
<img loading="lazy" style="object-fit:cover;max-width:600px;max-height:400px;aspect-ratio:1.5;width:100%;background-image:radial-gradient(at 0 0,#ffffff,#00000000 50%),radial-gradient(at 33% 0,#fefefc,#00000000 50%),radial-gradient(at 67% 0,#edecee,#00000000 50%),radial-gradient(at 100% 0,#f4f4f6,#00000000 50%),radial-gradient(at 0 50%,#fdfffe,#00000000 50%),radial-gradient(at 33% 50%,#f9f8f7,#00000000 50%),radial-gradient(at 67% 50%,#e5e6e9,#00000000 50%),radial-gradient(at 100% 50%,#edeef1,#00000000 50%),radial-gradient(at 0 100%,#fbffff,#00000000 50%),radial-gradient(at 33% 100%,#fafbfa,#00000000 50%),radial-gradient(at 67% 100%,#e0e5eb,#00000000 50%),radial-gradient(at 100% 100%,#e4eaf1,#00000000 50%)" decoding="async" sizes="(min-width: 600px) 600px, 100vw" srcset="<rest>">
```

That takes care of the best practices for low-quality blurred image placeholders.

## Can we please get to the IntersectionObserver!!

When the image is set with the `background-image` CSS property, things are a little trickier, and this is when the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) finally makes an appearance.

Intersection Observer API is a relatively new API in browsers. It makes it simple to detect when an element enters the viewport, and you can execute a callback when it does.

I use the following `LazyBackgroundImage` component:

```tsx showLineNumbers {8-14,21-24,28}
interface LazyBackgroundImageProps {
  backgroundImage: string;
}
export function LazyBackgroundImage({
  backgroundImage,
}: LazyBackgroundImageProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setVisible(true);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!global.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px",
      threshold: 0.1,
      root: null,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [callback]);

  const style = useMemo(() => {
    if (!global.IntersectionObserver || visible) {
      return { backgroundImage: `url(${backgroundImage})` };
    }
    const { blurhash } = getImagePropsFromMap(backgroundImage);
    return blurhashToGradientCssObject(blurhash);
  }, [backgroundImage, visible]);

  return <Box ref={containerRef} style={style}></Box>;
}
```

Lines 8-14 creates a callback that is passed as an argument to the `IntersectionObserver` constructor:

```ts showLineNumbers {
const callback = useCallback((entries: IntersectionObserverEntry[]) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    setVisible(true);
  }
}, []);
```

The callback is passed an array of `IntersectionObserverEntry` objects, which is a wrapper around the element that is being observed. The entry has an `isIntersecting` property that is true when the element is in the viewport.

Lines 21-24 create the intersection observer:

```ts
const observer = new IntersectionObserver(callback, {
  rootMargin: "0px",
  threshold: 0.1,
  root: null,
});
```

On line 28, the observer is told which element to observe.

```ts
observer.observe(containerRef.current);
```

On lines 39-45, we create a style object that initially has the blurhash CSS that gets swapped out for the background image when the observed HTML element is in the viewport.

```ts
const style = useMemo(() => {
  if (!global.IntersectionObserver || visible) {
    return { backgroundImage: `url(${backgroundImage})` };
  }
  const { blurhash } = getImagePropsFromMap(backgroundImage);
  return blurhashToGradientCssObject(blurhash);
}, [backgroundImage, visible]);

return <Box ref={containerRef} style={style}></Box>;
```

TLDR;
With a combination of the `LazyLoadedImage` and the `LazyBackgroundImage`, we can load the images on demand:

![lazy loaded images](https://res.cloudinary.com/ddospxsc8/image/upload/v1695932869/lazy-loaded-images_dbee9f.gif).

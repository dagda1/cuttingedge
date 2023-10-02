---
meta:
  title: Lazy loading background images with the IntersectionObserver and React with low-quality image placeholders created with blurhash
  description:
  date: "2023-09-28T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1695993562/lazy-loaded_k1bco2.gif"
  tags: ["performance", "react", "typescript"]
---

## The final result

Looking at the animated gif above, you can see the images getting lazy loaded in the network tab of the Chrome dev tools panel on the right as the user scrolls down the page.

I run performance metrics on every git commit as I don't want to wait to be told I have performance problems. Thanks to these metrics, I saw a problem with five large images getting downloaded to show the home page.

## Know your performance metrics on every commit

In a recent post titled [5 Things that should be Automated in a TypeScript/Javascript Monorepo](https://frontendrescue.com/posts/2023-09-04-5-things-to-automate), I mentioned the importance of automating performance metrics.

I have a GitHub action that adds performance metrics as a comment to a pull request on every commit. I use [webpagetest](https://www.webpagetest.org/) to run the tests, and the results highlight the unnecessary loading of all the large images on the website you are currently viewing's home page.

![webpage test results](https://res.cloudinary.com/ddospxsc8/image/upload/v1695914718/webpagetest-images_glttuy.png).

The home page is comprised of five large background images, each filling the whole viewport as the user scrolls down. Loading all these images up front is a wasteful performance hit. A better idea is to lazy load the images as the user scrolls down the page.

## Why not use the img tag's loading attribute?

The loading attribute on an `<img>` element can instruct the browser to defer the loading of off-screen images until the user scrolls near them.

```html
<img src="image.jpg" alt="lazy loaded" loading="lazy" />
```

Unfortunately, the large images in question are set using the `background-image` CSS property:

```css
background-image: url(https://res.cloudinary.com/666/image/upload/v66/struggle_yderkl.png);
```

## Low Quality Image Placeholders (LQIP)

Lazy loading is one part of the challenge, and another is to prevent the user from staring at a blank space until the image has loaded. It is currently good practice to provide a low-quality blurred image that bares a representation of the actual image, as you can see on my blog listing below:

![blurred images](https://res.cloudinary.com/ddospxsc8/image/upload/v1695918932/blurhash_vnbpuj.png).

A low-quality placeholder resembling the original image fills the space until the actual images are loaded and ready to view. The placeholder has significantly less download size in kilobytes.

Once the image has loaded, the placeholder is replaced with the actual image.

![real images](https://res.cloudinary.com/ddospxsc8/image/upload/v1696001710/posts_vz2ffl.png)

The [blurhash](https://github.com/woltapp/blurhash) package can help us create a low-quality image placeholder from an image.

### blurhash

[blurhash](https://blurha.sh/) generates compact representations of a placeholder for an image. Developing blurhashes is an expensive operation and not the sort you want to do at runtime. All the images on this website are stored in [cloudinary](https://cloudinary.com/ip/gr-sea-gg-brand-home-base), so I created [this npm package](https://www.npmjs.com/package/@cutting/cloudinary-blurhash) that will iterate all the images of a Cloudinary account and create a JSON file with the image properties and the burhash that looks like this:

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

The JSON file negates the need to create the [blurhash](https://blurha.sh) at runtime.

[BlurHash](https://blurha.sh/) takes an image and gives you a short string (only 20-30 characters!) that represents the placeholder for this image. The string is highlighted on line 5 of the JSON in the above sample, which my [npm package](https://www.npmjs.com/package/@cutting/cloudinary-blurhash) package generated.

For HTML `img` elements, I use the `LazyLoadedImage` component that is listed below:

```tsx showLineNumbers {1,2,22,22,30}
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

I use [@unpic/placeholder](https://github.com/ascorbic/unpic-placeholder) to transform the [blurhash](https://blurha.sh/) into a style object that I pass as a prop to the [@unpic/react](https://github.com/ascorbic/unpic-img) `Image` component that I use for responsive images.

I get the [blurhash](https://blurha.sh/) from the JSON file I generated with my package on line 18 of the above code sample.

The `blurhashToGradientCssObject` function will return the style object from the [blurhash](https://blurha.sh/) on line 22.

The rendered `img` tag and style attribute will look something like this:

```HTML
<img loading="lazy" style="object-fit:cover;max-width:600px;max-height:400px;aspect-ratio:1.5;width:100%;background-image:radial-gradient(at 0 0,#ffffff,#00000000 50%),radial-gradient(at 33% 0,#fefefc,#00000000 50%),radial-gradient(at 67% 0,#edecee,#00000000 50%),radial-gradient(at 100% 0,#f4f4f6,#00000000 50%),radial-gradient(at 0 50%,#fdfffe,#00000000 50%),radial-gradient(at 33% 50%,#f9f8f7,#00000000 50%),radial-gradient(at 67% 50%,#e5e6e9,#00000000 50%),radial-gradient(at 100% 50%,#edeef1,#00000000 50%),radial-gradient(at 0 100%,#fbffff,#00000000 50%),radial-gradient(at 33% 100%,#fafbfa,#00000000 50%),radial-gradient(at 67% 100%,#e0e5eb,#00000000 50%),radial-gradient(at 100% 100%,#e4eaf1,#00000000 50%)" decoding="async" sizes="(min-width: 600px) 600px, 100vw" srcset="<rest>">
```

That takes care of the best practices for low-quality blurred image placeholders.

## Can we please get to the IntersectionObserver!!

When the image is set with the `background-image` CSS property, lazy loading the image is a little trickier, and this is when the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) finally makes an appearance.

The IntersectionObserver API is relatively new in browsers. It makes it simple to detect when an element enters the viewport, and you can execute a callback when it does.

I use the following `LazyBackgroundImage` component:

```tsx showLineNumbers {10-16,23-27,30,42-46}
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

Lines 10-16 create a callback that is passed as an argument to the `IntersectionObserver` constructor:

```ts showLineNumbers {
const callback = useCallback((entries: IntersectionObserverEntry[]) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    setVisible(true);
  }
}, []);
```

The callback is passed an array of `IntersectionObserverEntry` objects, which are wrappers around any HTML elements that are being observed. The [entry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) has an [isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting) property that is true when the element is in the viewport. All the callback does is update the `visible` property of the local state with the `setVisible` call when `isIntersecting` is true, which will cause a re-render with the updated value.

Lines 23-27 create the intersection observer:

```ts
const observer = new IntersectionObserver(callback, {
  rootMargin: "0px",
  threshold: 0.1,
  root: null,
});
```

On line 30, the observer is told which element to observe.

```ts
observer.observe(containerRef.current);
```

On lines 42-46, a style object that initially has the [blurhash](https://blurha.sh/) CSS object is created. This object gets swapped for the background image when the observed HTML element is in the viewport.

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

## TLDR;

With a combination of the `LazyLoadedImage` and the `LazyBackgroundImage` components, we can load the images on demand as the user scrolls down the screen.

Only one large background image is loaded when the home page first loads.
![lazy loaded images](https://res.cloudinary.com/ddospxsc8/image/upload/v1695935341/webpage-results_nmkrr3.png).
I consider this case closed.

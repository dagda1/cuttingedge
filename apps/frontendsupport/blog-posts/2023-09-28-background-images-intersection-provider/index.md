---
meta:
  title: Lazy loading CSS background images with low-quality image placeholders with React and the IntersectionObserver
  description:
  date: "2023-09-28T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1695913334/IntersectionObserver_uowf3b.png"
  tags: ["performance", "react", "typescript"]
---

In a recent post titled [5 Things that should be Automated in a TypeScript/Javascript Monorepo](https://frontendrescue.com/posts/2023-09-04-5-things-to-automate), I mentioned the importance of automating performance testing.

I like adding performance metrics as a git comment on every pull request commit to highlight any problems. I used [webpagetest](https://www.webpagetest.org/) to run the tests, and the results highlighted the unnecessary loading of all the large images on the site's home page.

![webpage test results](https://res.cloudinary.com/ddospxsc8/image/upload/v1695914718/webpagetest-images_glttuy.png).

The home page comprises five large background images, with each image filling the whole viewport as the user scrolls down. Loading them all up front is not good practice. A better idea is to lazy load the images as the user scrolls down the page.

## Why not use the img tag's loading attribute

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

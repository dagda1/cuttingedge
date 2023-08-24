---
meta:
  title: remix-run route returning the loader function's JSON instead of HTML because of missing AWS Cloudfront cache keys
  Description: I had a very troubling bug whereby hitting a route in a remix-run application returned the loader function's JSON and not the default export's HTML
  date: "2023-08-19T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1692456792/remix_j9t9rx.png"
  tags: ["remix", "react", "aws"]
---

Things go wrong in production applications that will never happen in local development. When you push anything live for the first time, there is always some crazy weirdness that manifests itself in dark and mysterious ways.

I launched the [sales website](https://frontendrescue.com/) that you are currently looking at with some recent shiny [blog posts](https://frontendrescue.com/posts), ready for the world to enjoy. The world was in a good place, and I was prepared for all that came my way.

That is until I clicked on one of the links that I had posted on Linkedin, and instead of viewing a beautifully crafted HTML-rendered page, I looked in horror as the browser rendered a blob of JSON in all its non-HTML drabness:

![loader json](https://res.cloudinary.com/ddospxsc8/image/upload/v1692892010/loader-json_xjgnwt.png)

Looking at this JSON in the browser was like a sucker punch to the solar plexus. My sales website is about building my authority as a frontend expert. This JSON blob in the browser contradicts this highly. My anxious mind was conjuring up images of prospective clients looking disgusted at this glaring bug.

[remix-run](https://remix.run/docs/en/main) is the framework I use for this website, and upon closer inspection, it turned out that this rogue JSON was from a [remix-run loader function](https://remix.run/docs/en/1.19.3/route/loader) that can provide data to the current route being rendered. I was mystified as to how this could happen.

## Remix's routes, loader function and the undocumented \_data query parameter

[remix-run's routes](https://remix.run/docs/en/1.19.3/file-conventions/route-files-v2) will return HTML for a route from the default export of the code file that defines the route that was returning JSON. What gives?

I followed [remix-run's v2 naming convention](https://remix.run/docs/en/1.19.3/file-conventions/route-files-v2) to the letter, and the `posts._index.tsx` file is the route that lists all the blog posts for the `/posts` route.

![route code files](https://res.cloudinary.com/ddospxsc8/image/upload/v1692450524/routes_r4hmfb.png)

If a [remix-run](https://remix.run/docs/en/1.19.3/file-conventions/route-files-v2) route has a function that is both a default export and a react component, then that component will render the HTML for that route.

Each route can also define a [loader function](https://remix.run/docs/en/1.19.3/route/loader) that provides data to the component rendering the HTML for the current route.

My `posts._index.tsx` file that defines the default export for the component that renders the HTML and the loader function is below:

```ts:posts._index.tsx {1,5} showLineNumbers
export const loader: LoaderFunction = async () => {
  return getPosts();
};

export default function PostsHome() {
  const posts = useLoaderData<PostData[]>();

  return <Posts posts={posts} />;
}
```

But why was my default export not being called, and why was I getting the `loader` function's JSON instead?

Remix has an undocumented feature which Remix uses internally to get data from the loader file if the request has a `?_data` querystring on the URL.

When you click a link in a remix app, the HTML for the new route is rendered on the client side in the browser. Remix only needs to get the data from the loader function to render the page and NOT the whole server-rendered HTML. Remix will return the loader function's data if you include a query string parameter of `_data`, e.g. `_data=routes%2Fposts._index`.

Conversely, if you access a route directly, e.g. [https://frontendrescue.com/posts](https://frontendrescue.com/posts), the whole rendering process will happen on the server, and the HTML will be generated on the server. No call to the same route with the now infamous `_data` query parameter key will happen.

You can see this by observing the network tab if you click on a link that causes a client-side render of a new route.

![network tab](https://res.cloudinary.com/ddospxsc8/image/upload/v1692540964/_data_erbuze.png)

I found all this out later, but I was still in distress trying to find out where this evil-looking JSON was coming from.

## Remix, AWS architect and Cloundfront cache keys

Remix comes with several [deployment targets](https://remix.run/docs/en/main/guides/deployment) and I use the [aws architect](https://arc.codes/docs/en/get-started/quickstart) template. If I use AWS to host my frontend application, then I will use [AWS cloudfront](https://aws.amazon.com/cloudfront/) as my CDN. Cloudfront is a proxy that sits in front of your origin server (AWS API gateway in this example) and reduces the number of requests to the origin server by caching objects at the edge.

When configuring Cloudfront, you need to specify which cache keys Cloudfront will use to invalidate the cache. I had not configured CloudFront to include querystring parameters in the cache key.

Finally, we have the true nature of this bug. The first time I navigated to the route [/posts](https://frontendrescue.com/posts), this happened in response to me clicking a link, and this caused a client-side render. When rendering on the client, Remix only requires the loader data, so Remix made a request with the `?_data` querystring to [/posts?\_data=routes%2Fposts.\_index](https://frontendrescue.com/posts?_data=routes%2Fposts._index).

Cloudfront then cached this data, but because I had not configured Cloudfront to include querystring parameters in the cache keys, Cloudfront returned the JSON from the previous request the next time I went to this route by pasting the URL [https://frontendrescue.com/posts](https://frontendrescue.com/posts) directly into the browser address bar.

The cache not getting invalidated explains why I got the loader's JSON response and why anybody else in the known universe was getting the correct HTML when I asked them to click the link.

It was easy to configure CloudFront when armed with the knowledge.

![Configuring Cloudfront cache keys](https://res.cloudinary.com/ddospxsc8/image/upload/v1692454038/cf_r77gaq.png).

## Every bug is knowledge

I want to thank the devs who helped me with this troubling bug in the [remix discord server](https://discord.com/invite/xwx7mMzVkA). I struggled with this one.

The good thing about going through this is that I know much more about Remix and more about CloudFront caching if things go wrong.

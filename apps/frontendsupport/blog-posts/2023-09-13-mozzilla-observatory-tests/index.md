---
meta:
  title: Add this Github action to avoid security exploits
  description: Find out now before you suddenly find out you have security exploits
  date: "2023-09-13T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1694611874/observatory_umk7ra.png"
  tags: ["github-actions", "continuous-integration", "devops"]
---

Imagine a week before launching the online offering that you and your team have been burning the midnight oil over that you suddenly discover you have security exploits such as cross-site scripting attacks, man-in-the-middle attacks, cross-domain information leakage, cookie compromise, content delivery network compromise, or improperly issued certificates. Having this reported to you can knock your go-live date back months, or, even worse, your users could lose all confidence if the web offering is hacked through these exploits.

One of my primary drivers is to lead a stress-free life. I am 53, and I cannot eat pizza any more after being offered it too many times as a scant reward for working ridiculous hours in my younger days. I don't work silly hours any more. I cover my back at all times and often when a project is just starting.

Following on from my last post [5 Things that should be Automated in a TypeScript/Javascript Monorepo](https://frontendrescue.com/posts/2023-09-04-5-things-to-automate), I am going to add a sixth.

## Check your website is safe on every commit.

Mozzilla has a free offering called the [Mozilla HTTP Observatory](https://observatory.mozilla.org/) that comes with an [API](https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md) and [cli tools](https://github.com/mozilla/observatory-cli).

The Mozilla HTTP Observatory is a set of tools to analyze your website and inform you if you are utilizing the many available methods to secure it. Mozilla HTTP Observatory will give you a score out of a hundred, although it is possible to get more than a hundred out of a hundred.

## Run Mozilla HTTP Observatory in a GitHub action

I have the following steps in a deploy GitHub action that use [this Github action](https://github.com/simonireilly/observatory-github-action/tree/v0.0.2-beta.0/) to run the tests against the `web_host` field specified below.

```yml {6} showLineNumbers
- name: Run Mozilla Observatory tests
  if: github.event_name == 'pull_request'
  uses: simonireilly/observatory-github-action@v0.0.2-beta.0
  id: observatory
  with:
    web_host: https://staging.frontendrescue.com

- name: Create commit comment
  if: github.event_name == 'pull_request'
  uses: peter-evans/commit-comment@v1
  with:
    body: "# Branch PR ${{ steps.observatory.outputs.observatory-report }}"
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

When I first added the steps below, I got the following terrible score of **15/100** on the staging version of the site you are looking at:

![bad mozilla observatory score](https://res.cloudinary.com/ddospxsc8/image/upload/v1694638552/observatory-before_gxmbqt.png).

## Fixing the fixable

The site you are looking at is a [remix-run application](https://remix.run/docs/en/main) and I was able to add the following HTTP headers based on the observations returned from Mozilla observatory.

```ts showLineNumbers
const contentSecurityPolicy = [
  `base-uri 'self' ${CDN}`,
  `default-src 'none'`,
  `script-src 'self' ${CDN} ${TRACKING} 'unsafe-inline' https://plausible.io https://www.google-analytics.com`,
  `style-src 'self' ${CDN} https://fonts.googleapis.com https://fonts.googleapis.com 'unsafe-inline' data:`,
  `img-src 'self' ${CDN} https://www.google-analytics.com https://assets.calendly.com data: blob:`,
  `font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com`,
  `frame-src 'self' https://plausible.io https://calendly.com`,
  `media-src 'self' ${CDN} https://cdn.plyr.io`,
  `connect-src 'self' ${CRM} ${NEWSLETTER} ${CDN} ${TRACKING} https://cdn.plyr.io https://www.google-analytics.com`,
  `frame-ancestors 'self' https://plausible.io`,
  `form-action 'self' ${NEWSLETTER} ${CRM} ${CDN};`,
].join(";");

export const headers: HeadersFunction = () => {
  return {
    "X-XSS-Protection": "1; mode=block",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "DENY",
    "Strict-Transport-Security": "max-age=63072000",
    "Content-Security-Policy": contentSecurityPolicy,
  };
};
```

After I committed this change, the score has gone up to an unfathomable **105/100**.

![better Mozilla Observatory score](https://res.cloudinary.com/ddospxsc8/image/upload/v1694638552/observatory_after_yhj0gh.png).

## TLDR!

Mozilla observatory tests are not a comprehensive suite of tests and will not catch things such as SQL injection, but for the website, you are currently reading, the observatory tests are adequate.

I would generally advocate using something like [AWS WAF](https://aws.amazon.com/waf/), which does make your frontend incredibly secure and can take care of most of the [OWASP top 10 vulnerabilities](https://owasp.org/www-project-top-ten/) if not all.

The main takeaway is that you should be ready for anything that comes your way. Do not have a frantic owner or client screaming blue murder because your website has been hacked. Be proactive, be vigilant.....behave!

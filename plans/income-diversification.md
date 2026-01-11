# Income Diversification

## Status

- Website: frontendrescue.com
- Clients: 0
- Problem: nobody knows the site exists

## Framing

Don't say "performance" - say:

- More customers (faster sites convert better)
- Better Google rankings (Core Web Vitals affect SEO)

## Note

Coding is the comfort zone. Resist hiding there.

## Options

| Action                         | Notes                            |
| ------------------------------ | -------------------------------- |
| Post in communities            | Answer questions, show expertise |
| Free audit for someone visible | They share, you get exposure     |
| Cold DM with free value        | No pitch, just helpful           |
| Audit a public site as demo    | Break the no-case-study problem  |

## Target

- [ ] Find 10 posts where someone has a problem you can help with
- [ ] Answer 5 of them (helpful, no pitch)
- [ ] Note what problems come up most often

## Problems Found

(add here as you go)

## Site Audit Process

1. Run WebPageTest (mobile + desktop)
2. Note the main issues (LCP, CLS, blocking resources, images, waterfall, etc.)
3. Write up findings (anonymized for public, specific for private outreach)
4. Post anonymized version as content
5. Contact owner with specific version: "I found X, Y, Z - here's what's causing it"

### Current Audit: bareminerals.co.uk

- Mobile: 6
- Desktop: 38
- SEO: 92
- Status: run WebPageTest
- WebPageTest URL: (add here)
- Findings: (add here)
- Blog post: `blog-posts/2025-01-10-shopify-performance-audit/index.md`

## Blog Post Promotion

### Post to r/shopify

**Title:** My store scored 5/100 on Lighthouse mobile. I ran an audit to figure out what's actually wrong.

**Body:**

I keep seeing posts here about Shopify speed scores, so I ran a proper audit on a store (not mine, anonymized) to see what's really going on.

The strange part: the site felt fine when I used it. Fast, even. But Lighthouse gave it a 5/100 performance score on mobile.

Turns out Lighthouse simulates a mid-range Android on throttled 4G - basically worst case. That's why your phone test feels fine but the score says disaster.

The real problems I found:

- 14 render-blocking scripts (6 JS, 8 CSS)
- 10.7s before anything meaningful shows up
- Layout shift from a slow-loading video
- 11MB page weight

Each app/script on its own isn't terrible. But they all load at once, on every page.

I wrote up what I found: [Full write-up here](https://frontendrescue.com/posts/2025-01-10-shopify-performance-audit)

Curious if anyone else has dug into their speed score like this?

---

**Also post to:**

- [ ] r/ecommerce
- [ ] Shopify Community forums
- [ ] Twitter/X with #shopify #ecommerce
- [ ] LinkedIn

## Next

Answer questions in communities to understand problems.

Possible places:

- [r/shopify](https://reddit.com/r/shopify)
- [r/webdev](https://reddit.com/r/webdev)
- [r/frontend](https://reddit.com/r/frontend)
- [Shopify Community](https://community.shopify.com)
- [Indie Hackers](https://indiehackers.com)

Search terms:

- "site slow", "page speed", "loading time"
- "bounce rate", "conversions dropped"
- "SEO ranking dropped", "core web vitals"
- "lighthouse score", "mobile score"
- "shopify slow", "shopify speed score"

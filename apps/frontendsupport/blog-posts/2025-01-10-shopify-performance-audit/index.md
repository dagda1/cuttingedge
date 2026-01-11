---
meta:
  title: My Shopify Store Fails Google's Speed Test. Should I Care?
  description: When to worry about your Lighthouse score and when to ignore it
  date: "2025-01-10T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1768061685/frontendsupport/performance_avzere.png"
  tags: ["shopify", "performance", "core-web-vitals", "e-commerce"]
---

I recently ran a performance audit on a Shopify store with a brutal speed score. The kind of score that makes Shopify's dashboard flash warnings at you. Shopify's speed score is based on Google Lighthouse, and this store scored a brutal 5 out of 100 on mobile.

I've anonymised the results, but everything here is from a real store that's live and taking orders right now.

Here's the strange part: when I actually used the site, it felt fine. Fast, even. So what's going on?

## "I just checked my site on my phone. It loaded fine."

If you've ever looked at your Shopify speed score and then pulled out your phone to test it yourself, you've probably had this exact thought. The score says disaster, but your eyes say it's fine.

That's because Lighthouse doesn't test on your phone, your WiFi, or your 5G connection. It simulates a mid-range Android phone on a throttled 4G connection with a slowed-down CPU. The worst case.

## Why you should still care

Three reasons:

**Google uses this score for SEO.** Core Web Vitals are a ranking factor. A bad score won't kill your rankings overnight, but it's one more thing working against you.

**Not everyone has your internet.** Your customers on the train, in rural areas, or on older phones are getting closer to that Lighthouse experience than you are.

**Slow costs money.** Studies consistently show that every second of load time costs conversions. Amazon found that 100ms of latency cost them 1% in sales. Your margins probably aren't as good as Amazon's.

## What I found

| Problem                  | This store | Should be          |
| ------------------------ | ---------- | ------------------ |
| Largest Contentful Paint | 10.7s      | Under 2.5s         |
| Layout Shift             | 0.49       | Under 0.1          |
| Total Blocking Time      | 1.4s       | Under 0.2s         |
| Page weight              | 11MB       | As low as possible |

The server responds quickly (262ms). That's good. The problem is what happens next.

When your browser receives the HTML, it starts building the page. Green light, go. But then it hits a JavaScript file. Red light. Stop. Wait for the script to download and run. Green light, go again. Then another script. Red light. Stop. Wait. Green light. Go. Red light. etc.

This store has 6 render-blocking JavaScript files and 8 render-blocking CSS files. That's 14 red lights before your customer sees anything useful. By the time the browser gets through them all, over 10 seconds have passed.

The culprit isn't one thing. It's death by a thousand cuts:

| Script                 | Blocking Time |
| ---------------------- | ------------- |
| Customer fields widget | 185ms         |
| Email signup form      | 81ms          |
| Shopify perf-kit       | 43ms          |
| Search widget          | 39ms          |
| Image carousel         | 37ms          |

Each script on its own isn't terrible. But they all load at once, on every page, and the browser has to stop for each one.

Yes, that's Shopify's own "perf-kit" adding 43ms of blocking time. The irony isn't lost on me.

There's also a layout shift problem. The page scores 0.49 on CLS (Cumulative Layout Shift) when it should be under 0.1. The likely cause? A large video component that takes time to load and pushes everything else around when it finally appears.

## So should you care?

It depends. If your store feels fast to you and your customers aren't complaining, maybe the score is just a number. But if you're losing Google rankings, seeing high bounce rates on mobile, or wondering why conversions are lower than they should be - the score might be telling you something.

The fix isn't simple. It's not one app to uninstall or one setting to change. It's understanding what each script does, whether you actually need it, and whether it can be loaded differently. That takes time and access to your store.

If your Shopify speed score is keeping you up at night, get in touch. I'll take a look.

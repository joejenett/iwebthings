---
layout: post
title:  adding a custom category feed to a Jekyll static site
date:   2023-04-13 14:18:12 -0400
author: joe jenett
category:
  -  how-to
permalink: /adding-a-custom-category-feed-to-a-jekyll-static-site/
slug: adding-a-custom-category-feed-to-a-jekyll-static-site
summary: 

---
<p>I recently updated the <a href="https://joejenett.com/aggregator/">aggregator</a> to include the feeds from each of my remaining active sites. In the case of the <em>i.webthings directory</em>, I needed a feed of its corresponding <em>i.webthings</em> category with the full content of its most recent post. </p>
<p>I couldn’t find any information on the web how to pull it off, so I thought I’d share my solution in case other Jekyll users might find it useful. A file in the root directory did the trick, generating the feed when the site is built. See <a href="https://github.com/joejenett/iwebthings/blob/main/iwd.atom">iwd.atom</a> for the code. Cheers.</p>

<a style="display:none;" href="https://brid.gy/publish/mastodon"><small>(cross-posted to mastodon)</small></a>
---
layout: post
title:  "notes on the makeover and feeds"
date:   2021-08-12 16:47:00 -0400
author: joe jenett
category:
  - i-webthings
permalink: /notes-on-the-makeover-and-feeds/
slug: makeover-and-feeds
---
<div style="border-bottom:1px dashed #ccc;margin-bottom:12px;"><strong>Update</strong> 08/13/21:<br />
<p>I believe the problem with redirecting the old feed in feed readers is now resolved. I’ll be testing it more later today, but don’t be surprised if the old feed is now showing you the latest posts in your feed reader.</p></div>
<p>I expected the migration to hit me with a few gotchas after going live. I’ve spent the day resolving several minor issues but mostly trying to resolve an issue with redirecting feeds (which was not expected). Unfortunately, even though all permalinks are redirecting properly in the browser, including the feeds, I found that feed readers are not picking up the redirect.</p>
<p>This site resides on GitHub’s servers instead of where the Wordpress site resided. If both sites were using the same file system, a simple symlink would have worked. So I tried a number of solutions without success. Though I intend to keep working on a solution, for now, I’d appreciate your adding the new feed to your reader (<a href="https://iwebthings.jenett.org/" title="">i.webthings hub</a> → <a href="https://iwebthings.jenett.org/feed.atom" title="">RSS feed</a>). Sorry about that. Here’s an updated <a href="https://iwebthings.jenett.org/iwt.opml" title="">OPML file</a> containing a number of the <em>webthings</em>.</p>
<p>Take care.</p>
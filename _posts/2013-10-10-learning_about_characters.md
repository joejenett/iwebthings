---
id: 63
title: learning about characters
date: 2013-10-10T09:32:34-04:00
author: joe jenett
excerpt: |
  
  <p>
  So. Something I linked to in a recent <i>dailywebthing</i> post sparked my interest and ended up helping me solve a little mystery that’s been bugging me for quite some time:
  </p>
  <p>
  <a href="http://smartquotesforsmartpeople.com/">Smart Quotes for Smart People</a>
  </p>
  <blockquote><p>
  “Smart quotes,” the correct quotation marks and apostrophes, are curly or sloped. "Dumb quotes," or straight quotes, are a vestigial constraint from typewriters when using one key for two different marks helped save space on a keyboard. Unfortunately, many improper marks make their way onto websites because of dumb defaults in applications and CMSs. Luckily, using correct quotation marks and apostrophes today is easier than you think.
  </p></blockquote>
  <p>
  As <a href="http://en.wikipedia.org/wiki/UTF-8">UTF-8</a> has become more widely used as the default encoding on the web, I’ve been troubleshooting problems with how some special characters appear when parsing RSS feeds with a PHP script. It’s the script I use on this site to show recent updates to various <i>webthings</i>. I also use the script (and fixed it) on another page I recently built for a friend (toot toot).
  </p>
  <p>That site I linked to opened my eyes. It dawned on me that the old script I’d been using for years was written before PHP supported UTF-8. A few simple changes in the code fixed the problem. It no longer has ‘dumb defaults’ and I am now free to be smart. How liberating!
  </p>
  <p>
  Moral of the story: Every day is an opportunity to learn new things.
  </p>
layout: post
guid: https://iwebthings.com/i.webthings/2013/10/10/learning-about-characters/
permalink: /learning_about_characters/
classic-editor-remember:
  - classic-editor
complete_open_graph:
  - 'a:7:{s:8:"og:title";s:0:"";s:14:"og:description";s:0:"";s:8:"og:image";s:0:"";s:7:"og:type";s:0:"";s:12:"twitter:card";s:7:"summary";s:19:"twitter:description";s:0:"";s:15:"twitter:creator";s:0:"";}'
categories:
  - miscellany
  - personal
---
So. Something I linked to in a recent _dailywebthing_ post sparked my interest and ended up helping me solve a little mystery that’s been bugging me for quite some time:

[Smart Quotes for Smart People](http://smartquotesforsmartpeople.com/)

> “Smart quotes,” the correct quotation marks and apostrophes, are curly or sloped. &#8220;Dumb quotes,&#8221; or straight quotes, are a vestigial constraint from typewriters when using one key for two different marks helped save space on a keyboard. Unfortunately, many improper marks make their way onto websites because of dumb defaults in applications and CMSs. Luckily, using correct quotation marks and apostrophes today is easier than you think.

As [UTF-8](http://en.wikipedia.org/wiki/UTF-8) has become more widely used as the default encoding on the web, I’ve been troubleshooting problems with how some special characters appear when parsing RSS feeds with a PHP script. It’s the script I use on this site to show recent updates to various _webthings_. I also use the script (and fixed it) on another page I recently built for a friend (toot toot).

That site I linked to opened my eyes. It dawned on me that the old script I’d been using for years was written before PHP supported UTF-8. A few simple changes in the code fixed the problem. It no longer has ‘dumb defaults’ and I am now free to be smart. How liberating!

Moral of the story: Every day is an opportunity to learn new things.
---
layout: page
permalink: /categories/
title: Categories
---
<div id="archives">
{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <a name="{{ category_name | slugize }}"></a>
    <h3 class="category-head">{{ category_name }}</h3>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a> <span><small>({{ post.date | date:'%b %-d, %Y'}})</small></span> &nbsp; </li>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
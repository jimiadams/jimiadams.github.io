---
layout: archive
title: "musings"
permalink: /musings/
author_profile: true
---

{% for post in site.posts %}

### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%B %-d, %Y" }}

{{ post.excerpt }}

{% assign remainder = post.content | remove_first: post.excerpt %}

{% if remainder != "" %}
<details>
  <summary>Read more</summary>
  {{ remainder }}
</details>
{% endif %}

<hr>

{% endfor %}
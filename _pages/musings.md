---
layout: archive
title: "musings"
permalink: /musings/
author_profile: true
---

(a place to gather some less formal "ideas in process" writings)

<hr>
{% for post in site.posts %}

{{ post.date | date: "%B %-d, %Y" }}
### [{{ post.title }}]({{ post.url | relative_url }})
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
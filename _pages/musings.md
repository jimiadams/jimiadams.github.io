---
layout: archive
title: "musings"
permalink: /musings/
author_profile: true
---

{% for post in site.posts %}

<details>
  <summary>
    <strong>{{ post.title }}</strong>
    — {{ post.date | date: "%B %-d, %Y" }}
  </summary>

  {{ post.content }}

</details>

<hr>

{% endfor %}
---
title: "NBA trades"
date: "2024-12-03"
categories:
  - SNA
tags:
  - NBA
  - ergm
---

A new paper w/ Michał Bojanowski is now [published](https://doi.org/10.1017/nws.2023.18) in *Network Science*. 

In it we examine the popular refrain that NBA teams avoid trading with others within their own division. The paper also serves as a bit of a tutorial for the logic of when a weighted exponential random graph model is necessary. 

If I'd had the gumption we'd have followed my suggestion that papers w/ Yes/No questions for titles should have one word abstracts. In this case, that would have been "No."

<!--more-->

This paper started as an aside comment in a grad class a number of years ago. Several years later, early 2020 in fact, a student in that course reached out to say he'd [scraped the data](https://github.com/Z-Richardson/NBA_SNA_Project) I'd need to answer that question. While Michał and I started this around then intending it as a simple visualization (e.g., slice below), given covid & covid work, it quickly got back-burnered.

<img src="/images/NBA_trades.png" width="300">

The catch is the question actually requires proper conditioning of the question statistically (to account for the base trade rate opportunities' divergence from random "preferences" & the weighted nature of the data) to be answered accurately. We demonstrate how easy it would be to come to the wrong conclusion in the paper.

So it took on a bit of a larger life than the initial visualization plan, and took longer than anticipated to get out. But it's up now. We also posted our data & code (https://github.com/mbojan/nba-trades), not just for "Open Science" reasons, but also because there are a LOT of related ways to extend our question into analyses about actual trade predictors that could make use of those. Hopefully someone will take those and run with them.

Ungated version - https://mbojan.github.io/nba-trades/


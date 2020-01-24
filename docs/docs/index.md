---
home: true
heroImage: /logo@2x.png
heroText: Vue Component Development Kit
title: Vue Component Development Kit
tagline: Build on a strong Foundation
actionText: Get Started →
actionLink: /components/
features:
- title: Incrementally Adoptable
  details: Vue Component Development Kit consists of several packages. You can use just one, some or all packages. Each package is useful on its own.
- title: No/Minimal Styling
  details: Vue Component Development Kit avoids custom styles as much as possible. CSS is only used (and provided) where it is important for the actual functionality.
- title: Well Tested & Documented
  details: Almost everything is unit and/or E2E–tested.
footer: MIT Licensed | Copyright © 2019-present Christian Kienle
---

The *Vue Component Development Kit* is a set of low-level components, mixins and utilities that act as a foundation for other component libraries and applications. Kickstart your project with a *well-tested*, *incrementally adoptable* and *minimally invasive* framework. Everything that is part of *Vue Component Development Kit* solves an actual problem that you may stumble upon sooner or later.

## What is in the Box
<ul>
  <template v-for="componentPage in $vcdkDocsComponentPages">
    <li>
      <router-link :to="{ name: componentPage.key }" :key="componentPage.key">{{componentPage.title}}</router-link>
    </li>
  </template>
</ul>

## Philosophy
Everything that is part of the *Vue Component Development Kit* (abbr. **CDK**) tries to conform to a certain philisophy.

### Every Package is useful on its own
Every package solves an actual problem and is useful on it's own. There are almost no (non–trivial) dependencies between the packages itself. This makes it easy to use just a single package, multiple packages or all.

### Every Package is well documented and well tested
Everything that is considered *public* is documented. If it isn't please create an inssue. Whenever *Vue Component Development Kit* relies on a third party library and the test coverage of that library is not sufficient, tests are created and contributed back to the project.

<div style="margin: 1.5rem 0; text-align:center; font-size:0.8rem;">
  <a href="https://www.netlify.com/">This site is powered by Netlify</a>
</div>

## Changelog
…
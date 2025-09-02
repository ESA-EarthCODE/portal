---
layout: home
title: Welcome to EarthCODE

hero:
  text: FAIR Science for Earth Action
  tagline: Create, find, and collaborate on data science experiments, unlocking the full potential of Earth Observation for the benefit of society - from research to policy
  background: /img/EarthCODE_Background-Pattern_1.jpg
  # image: <img src="https://placehold.co/800x600" />
  image: "/img/EarthCODE_Herobanner_1920x1080.jpg"
  actions:
    - theme: cta
      text: Get started
      link: '#start-working-with-earthcode'
---

<section class="white" style="padding-top: 3rem">

## Start Working With EarthCODE 

<esa-cards>
  <esa-card
    title="Publish your experiment"
    description="Upload data, workflows, and results. Make them reproducible and citable."
    link="https://esa-earthcode.github.io/examples/index-2/"
    action="Start now"
  ></esa-card>
  <esa-card
    title="Discover & reuse research"
    description="Search and filter through published science assets. Use in local or cloud environments."
    link="https://opensciencedata.esa.int/catalog"
    action="Start now"
  ></esa-card>
  <esa-card
    title="Run workflows on integrated platforms"
    description="Seamless access to EO platforms like EDC, Pangeo, DeepESDL or OpenEO. No setup needed."
    link="/computational-research"
    action="Start now"
  ></esa-card>
  <esa-card
    title="Store data & code in the ESA Repository"
    description="Long-term, FAIR-compliant storage for your science assets."
    link="https://esa-earthcode.github.io/documentation/Technical%20Documentation/ESA%20Project%20Results%20Repository/"
    action="Start now"
  ></esa-card>
  <esa-card
    title="Visualize your results"
    description="Built-in tools and dashboards to plot, compare, and share geospatial outputs."
    link="/visualisation-tools"
    action="Start now"
  ></esa-card>
  <esa-card
    title="Collaborate via the Forum"
    description="Join discussions, ask questions, and exchange best practices."
    link="https://discourse-earthcode.eox.at/"
    action="Start now"
  ></esa-card>
</esa-cards>

</section>
<section class="blue">

## Partnerships
  <esa-cards>
    <esa-card
      image="/img/APEx_KeyVisual_notext-1010x568.png"
      title="APEx"
      description="Streamlining from EO innovation to operations - APEx provides easy access to ESA's Earth observation application outcomes for the EO community. With a range of services and tools APEx simplifies the transition of algorithms into operational services and encourage the incorporation of current cloud-based EO services and technologies."
      action="Go to APEx"
      link="https://apex.esa.int/"
    ></esa-card>
  </esa-cards>

<!--
      :feature="blogpost.frontmatter.feature"
      overline="Story"
-->

</section>
<section class="white">

## Latest News & Updates

<BlogGallery
  max-posts="3"
/>
<br />
<a class="VPButton cta" href="/blog">More blog posts</a>

</section>
<section class="blue">

## Featured Data and Workflows

<esa-cards>
  <esa-card
    title="Dataset 1"
    description="Dataset + Python workflow + results <br /><br /><img src='https://placehold.co/100x100' />"
    link="/"
    action="Run this on Pangeo"
  ></esa-card>
  <esa-card
    title="Workflow 1"
    description="Reusable Workflow <br /><br /><img src='https://placehold.co/100x50' />"
    link="/"
    action="Explore & modify on openEO"
  ></esa-card>
  <esa-card
    title="Experiment 1"
    description="Available on EarthCODE repository"
    link="/"
    action="Reuse this experiment on DeepESDL"
  ></esa-card>
    <esa-card
    title="Visualisation 1"
    description="Interactive visualization built with EarthCODE tools <br /><br /><img src='https://placehold.co/200x100' />"
    link="/"
    action="Try visualization with the xcube viewer"
  ></esa-card>
</esa-cards>

</section>
<section class="white">
  <div class="two-column">

  ## Subscribe to the EO Open Science Newsletter
  <div>

  #### Why should I sign up?

  - Get monthly updates from ESA EO Open Science
  - Access expert insights, research updates, event announcements, and more
  - Stay updated on new EarthCODE features, resources and collaboration opportunities

  <a class="VPButton cta no-icon" href="https://esacontact.esa.int/ESA_EO_OpenScience_Subscribe" target="_blank">Subscribe</a>
  </div>
  </div>
</section>

<ClientOnly>
  <esa-gateway
    .items="[
      {
        title: 'ESA Vision',
        links: [
          {
            name: 'EO Science Strategy',
            href: 'https://doi.org/10.5281/zenodo.13819557',
          },
        ],
      },
      {
        title: 'ESA EO Programme',
        links: [
          {
            name: 'Observing the Earth',
            href: 'https://www.esa.int/Applications/Observing_the_Earth',
          },
          {
            name: 'Science for Society',
            href: 'https://eo4society.esa.int',
          },
        ],
      },
      {
        title: 'Research at ESA',
        links: [
          {
            name: 'Earth System Science Hub',
            href: 'https://sciencehub.esa.int',
          },
        ],
      },
      {
        title: 'Opportunities',
        links: [
          {
            name: 'Network of Resources',
            href: 'https://nor-discover.org',
          },
        ],
      },
    ]"
  ></esa-gateway>
</ClientOnly>

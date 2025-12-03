---
layout: page
---

<section class="blue hero">

# Join our Earth Science Community

**Connect with researchers, share insights, and collaborate on data and workflows.** EarthCODE is building a collaborative community for Earth System Science, driven by FAIR and Open Science principles. 

<a class="VPButton cta no-icon" href="https://discourse-earthcode.eox.at/">Visit Forum</a>

</section>
<section class="light-grey">

# Forum

Join the **EarthCode Discourse Forum** to participate in discussions on Earth Observation research, scientific data and open-source tools for Earth science. Use the forum for your Science Cluster meetings, to promote your work, or just to stay informed about the latest news and events.

### Latest topics

<DiscourseForumPosts
  endpoint="https://discourse-earthcode.eox.at"
  per_page=3
></DiscourseForumPosts>
<div>
  <a class="VPButton cta primary" href="https://discourse-earthcode.eox.at/">Visit Forum</a>
</div>

</section>

<section class="dark-grey">

# EarthCODE User Communities

<esa-cards>
  <esa-card
    image="/img/EarthCODE-ESA_science_clusters.jpg"
    tag="Science"
    title="ESA Science Clusters"
    description="ESA Science Clusters are collaborative initiatives designed with a purpose to strengthen and advance scientific research across key Earth system science domains such as atmosphere, carbon cycle, hydrology, agriculture, cryosphere, oceans, geohazards."
    link="/community/scientists/science-clusters"
    action="Read more"
  ></esa-card>
  <esa-card
    image="/img/ESA_ScienceHub.png"
    tag="Science"
    title="ESA Science Hub"
    description="The Earth System Science Hub is an ESA facility designed to promote and support advanced Earth System and climate science studies in a cutting-edge, collaborative, cloud computing and open science environment to unlock the full potential of latest EO technologies."
    link="/community/scientists/science-hub"
    action="Read more"
  ></esa-card>
  <esa-card
    image="/img/EO_Open_Science.png"
    tag="Science"
    title="EO Science for Society"
    description="Discover a growing list of ESA funded projects and initiatives under Earth Observation Programme. Discover full list of projects at ESA EOP-S through EO4Society page, a single point of access to state-of the art information , networking resources on EO applications and science outcomes for societal and scientific benefits."
    link="https://eo4society.esa.int/projects/"
    action="Read more"
  ></esa-card>
  <esa-card
    image="/img/EC-ESA_JointESSI_treedom_logo_231102.png"
    tag="Science"
    title="Other Projects"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    link="/community/scientists/other-projects"
    action="Read more"
  ></esa-card>
</esa-cards>

</section>
<section class="light-grey">

## Engage and join the Open Science Community of EarthCODE

The EarthCODE ecosystem has been purposefully designed to foster cooperation at every level—within your project team throughout its entire lifecycle, through advanced tools on our integrated platforms, and across the global scientific community. Discover how collaboration can amplify your impact and learn how you can actively shape the future of EarthCODE—whether you are a Scientist, Developer, or Platform Provider. Together, we can accelerate innovation and unlock new possibilities for Earth Observation. To learn more about collaboration opportunities and how we are building our community [visit the page](https://esa-earthcode.github.io/documentation/Community%20and%20Collaboration/collaboration-and-community)

</section>

<script setup>
  import DiscourseForumPosts from "../../.vitepress/theme/components/DiscourseForumPosts.vue"
</script>

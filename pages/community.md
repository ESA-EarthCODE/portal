---
layout: page
---

<section class="blue hero">

  # Join our Earth Science Community
  **Connect with researchers, share insights, and collaborate on data and workflows.** EarthCODE is building a collaborative community for Earth System Science, driven by FAIR and Open Science principles. We discuss open-source tools, research, data and to enable re-use and collaboration, advancing research for a sustainable future. Participate in discussions, attend events, and stay informed about the latest news.

  <a class="VPButton cta no-icon" href="https://esacontact.esa.int/ESA_EO_OpenScience_Subscribe" target="_blank">Subscribe</a>
</section>
<section class="light-grey">

# Forum
Join the EarthCode Discourse forum for discussions about FAIR and open-science and exploring the diverse tools, published research and solutions offered by the EarthCODE platform.

### Latest topics

<DiscourseForumPosts
  endpoint="https://discourse-earthcode.eox.at"
></DiscourseForumPosts>
<div>
  <a class="VPButton cta no-icon" href="https://discourse-earthcode.eox.at/">Visit Forum</a>
</div>
</section>
<section class="white">

## Our Partners
  <esa-cards>
    <esa-card
      icon="<img src='https://esa-earthcode.github.io/portal-assets/partners/Telespazio_cropped.png' height='40' style='max-width: 100%; object-fit: contain' />"
      title="Telespazio"
      description="Leading project management and technical innovation, driving EarthCODE’s success with cutting-edge EO expertise"
      action="Visit website"
      link="https://www.telespazio.com"
    ></esa-card>
    <esa-card
      icon="<img src='https://esa-earthcode.github.io/portal-assets/partners/EOX_cropped.png' height='40' style='max-width: 100%; object-fit: contain' />"
      title="EOX"
      description="Championing FAIR and Open-Science principles and bringing Euro Data Cube and the Open-Science Catalog to EarthCODE as well as developing the EarthCODE portal"
      action="Visit website"
      link="https://eox.at/"
    ></esa-card>
    <esa-card
      icon="<img src='https://esa-earthcode.github.io/portal-assets/partners/BC_cropped.png' height='40' style='max-width: 100%; object-fit: contain' />"
      title="Brockmann Consult"
      description="Integrating DeepESDL Platform into EarthCODE enabling machine-learning and artificial intelligence workflows"
      action="Visit website"
      link="https://www.brockmann-consult.de/"
    ></esa-card>
    <esa-card
      icon="<img src='https://esa-earthcode.github.io/portal-assets/partners/Lampata_cropped.png' height='40' style='max-width: 100%; object-fit: contain' />"
      title="Lampata"
      description="Leading science community communication and deploying Pangeo for EarthCODE collaboration"
      action="Visit website"
      link="https://www.lampata.eu/"
    ></esa-card>
    <esa-card
      icon="<img src='https://esa-earthcode.github.io/portal-assets/partners/PANGEO_cropped.png' height='40' style='max-width: 100%; object-fit: contain' />"
      title="Pangeo"
      description="Building community, guides, and bringing the Pangeo Ecosystem to power EarthCODE"
      action="Visit website"
      link="https://www.pangeo.io/"
    ></esa-card>
    <esa-card
      icon="<img src='https://esa-earthcode.github.io/portal-assets/partners/VITO_cropped.png' height='40' style='max-width: 100%; object-fit: contain' />"
      title="Vito"
      description="Powering EarthCODE by deploying the OpenEO Platform for standardzied Earth Observation workflows"
      action="Visit website"
      link="https://vito.be/en"
    ></esa-card>
  </esa-cards>
</section>
<section class="light-grey">

## Science Clusters

<a href="https://eo4society.esa.int/communities/scientists/" target="_blank"><img src="/img/EO4society_ScienceClusters.png" /></a>

</section>
<section class="light-grey">

## ESA Science Hub

<a href="https://sciencehub.esa.int/" target="_blank"><img src="/img/ESA_ScienceHub.png" /></a>

</section>

<script setup>
  import DiscourseForumPosts from "../.vitepress/theme/components/DiscourseForumPosts.vue"
</script>

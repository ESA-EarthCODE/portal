---
layout: page
---

<section class="blue hero">

# EarthCODE's Ecosystem

The EarthCODE ecosystem integrates tools, services, and community that support FAIR Science for Earth Action. To turn EO data into open, lasting, and impactful science, EarthCODE offers:

* **Sponsored access ESA and partner cloud computing platforms** tailored to your research goals.
* **FAIR Data & workflow engineering support** to complement your scientific expertise.
* **Persistent publication of your research outputs** with DOIs in the Open Science Catalogue.
* **Long-term storage & preservation of results** in ESA-managed repository.
* **A hub to share and find** open data & reproducible methods.
* **An open forum** for your science projects and communities.

EarthCODE works in synergy with APEx, which supports the maturation of scientific developments into operational applications.

Sign in to the EarthCODE Portal for Single Sign-On (SSO) access to all integrated platforms and community resources.

<a class="VPButton cta primary" href="https://workspace.earthcode.eox.at/" target="_blank">Sign in</a><br />

<img src="/img/EarthCODE_Ecosystem.png"/>

</section>
<section class="dark-grey">

## Explore the Open Science Catalog

Publishing your research through EarthCODE makes your datasets, workflows, and results discoverable in the Open Science Catalogue, alongside other FAIR and open data from ESA-funded studies and partner initiatives.

The Catalogue brings together research outputs from across the ESA projects, enabling scientists to find, reuse, and build upon results from related activties. It ensures your work is visible, citable, and connected to the network of ESA Earth Observation science.

<p><iframe src="https://opensciencedata.esa.int/stac-browser/#/" style="width: 100%; height: 400px"></iframe></p>

<a class="VPButton cta" href="https://opensciencedata.esa.int" target="_blank">Explore Catalog</a>

</section>
<section class="white">

## Sponsored access ESA and partner cloud computing platforms

Unlock powerful cloud computing for Earth science research. With EarthCODE, top cloud computing platforms are seamlessly accessible by users. Explore the development tools, EO Data selection, and compute capabilities each platform provides. Integration with EarthCODE, ensures that the platform supports FAIR tooling, development, and sharing of interoperable workflows and automates data publication process accessible via <a href="https://workspace.earthcode.eox.at/" target="_blank">Single Sign On (SSO)</a>.

<esa-cards>
  <esa-card
    v-for="platform in platforms"
    :icon="`<img src='${platform.icon}' height='40' style='max-width: 100%; object-fit: contain' />`"
    tag="Platform"
    :title="platform.title"
    :description="platform.description"
    :link="platform.access"
    action="Access"
  ></esa-card>
</esa-cards>
</section>
<section class="light-grey">

## Benefits of Computational Research at EarthCODE 
Scalable cloud resources, efficient cross-platform data workflows, and a collaborative research community for impactful research and innovation.

  <esa-cards>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="Scalability"
      description="Bring your compute to the data using EarthCODE’s cloud-native, cross-platform environment and long-term storage solutions empowering research at a planetary scale."
    ></esa-card>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="Speed and Efficiency"
      description='Utilize integrated tools and platforms to streamline your data analysis, enabling efficient sharing with the Earth Observation community while adhering to <a href="https://www.go-fair.org/fair-principles/" target="_blank">FAIR</a> and <a href="https://www.esa.int/About_Us/Digital_Agenda/Open_Science" target="_blank">open science</a> principles. Achieve more with less effort.'
    ></esa-card>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="Collaboration"
      description="Effortlessly Find and Reuse workflows, research and data within the scientific community. EarthCODE fosters a vibrant community of algorithm developers, researchers, and scientists, promoting an interactive and collaborative research environment."
    ></esa-card>
  </esa-cards>
</section>
<section class="dark-grey">

## Long-term storage & preservation of results in ESA Repository

The ESA Project Results Repository (PRR) provides long term storage of research outcomes from ESA-funded EO Projects and activities. It provides a harmonised and structured way to store research outcomes (including data, workflows, experiment, and associated documentation). Research outcomes are organised in STAC Objects (Collections), accessible via the STAC API and the Open Science Catalog Browser.

<a href="https://esa-earthcode.github.io/tutorials/index-1/">Publication of results to the PRR</a> is highly encouraged for projects aiming to ensure long-term research outcomes preservation, accessibility and amplified the scientific impact of the project.

<a class="VPButton cta primary" href="https://eoresults.esa.int/browser/#/external/eoresults.esa.int/stac">Explore PRR Collections</a>

</section>

<script setup>
  import { ref } from "vue";
  import platformsJson from "./integrated-platforms.json" with {type: "json"};
  const platforms = ref(platformsJson)
</script>

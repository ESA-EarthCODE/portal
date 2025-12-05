---
layout: page
---

<section class="blue hero">

# EarthCODE's Ecosystem

The EarthCODE ecosystem integrates tools, services, and community that support FAIR Science for Earth Action. To turn EO data into open, lasting, and impactful science, EarthCODE offers:

1. **Sponsored access ESA and partner cloud computing platforms** tailored to your research goals.
2. **FAIR Data & workflow engineering support** to complement your scientific expertise.
3. **Persistent publication of your research outputs** with DOIs in the Open Science Catalogue.
4. **Long-term storage & preservation of results** in ESA-managed repository.
5. **A hub to share and find** open data & reproducible methods.
6. **An open forum** for your science projects and communities.


EarthCODE works in synergy with APEx, which supports the maturation of scientific developments into operational applications.

Sign in to the EarthCODE Portal for Single Sign-On (SSO) access to all integrated platforms and community resources.

<a class="VPButton cta primary" href="https://workspace.earthcode.eox.at/" target="_blank">Sign in</a><br />

<img src="/img/EarthCODE_Ecosystem.png"/>

</section>
<section class="dark-grey">

## Explore the Open Science Catalog

Publishing your research in EarthCODE makes your datasets, workflows, and results discoverable in the Open Science Catalogue, alongside other FAIR and open data from ESA-funded studies and partner initiatives, such as the [ESA-EC Earth System Science Initiative (ESSI)](https://eo4society.esa.int/wp-content/uploads/2021/07/ESSI_brochure2_210527.pdf).

The Catalogue is the place where scientists can discover ESA project results in a machine-actionable format, openly accessible to reuse, and build upon. Results in the Catalogue are visible, citable, and connected to the network of ESA Earth Observation science.

<p><iframe src="https://opensciencedata.esa.int/stac-browser/#/" style="width: 100%; height: 400px"></iframe></p>

<a class="VPButton cta" href="https://opensciencedata.esa.int" target="_blank">Explore Catalog</a>

</section>

<section class="light-grey">

## Long-term Storage in ESA Repository

The ESA Project Results Repository (PRR) provides long term storage of research outcomes from ESA-funded EO Projects and activities. It provides a harmonised and structured way to store research outcomes (including data, workflows, experiment, and associated documentation). Research outcomes are organised in STAC Objects (Collections), accessible via the STAC API and the Open Science Catalog Browser.

**[ESA Project results are stored in the PRR](https://esa-earthcode.github.io/tutorials/index-1/)** to ensure research outcomes are long-term preserved and accessible.


<a class="VPButton cta primary" href="https://eoresults.esa.int/browser/#/external/eoresults.esa.int/stac">Explore PRR Collections</a>

</section>

<section class="white">

## Accessible Computation - ESA and Partner Cloud Computing Platforms

EarthCODE offers accessible computation resources for Earth Science. Thematic and generic cloud computing platforms from ESA and partnering initiatives are integrated in the EarthCODE federation, offering tailored and powerful development environments, access to EO data collections, and AI capabilities. 

Integrated platforms are accessible via <a href="https://workspace.earthcode.eox.at/" target="_blank">Single Sign On (SSO)</a>.

Browse the [Documentation](https://esa-earthcode.github.io/documentation/Integrating%20New%20Platforms%20to%20EarthCODE/) to learn more about joining the EarthCODE initiative as a Platform Provider. 

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

Working on an EarthCODE integrated platform not only gives you the flexibility of scaling-up resources to fit your project's needs, but also ensures that your project's results will be FAIR (Findable, Accessible, Interoperable and Reusable) and published in EarthCODE for long-term accessibility. 

  <esa-cards>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="Scalable Processing"
      description="The EarthCODE federation integrates state-of-the-art cloud computing environments with access to large EO mission data collections from ESA, Copernicus, NASA and beyond, offering versatile, scalable and powerful computing resources for your Earth science research."
    ></esa-card>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="Data & Workflow Engineering Services"
      description='EarthCODE integrated platforms offer data and workflow engineering services to support your science team adhere to <a href="https://www.go-fair.org/fair-principles/" target="_blank">FAIR</a> and <a href="https://www.esa.int/About_Us/Digital_Agenda/Open_Science" target="_blank">open science</a> principles and ensure the results are publication-ready. Achieve more with less effort.'
    ></esa-card>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="Find, Reuse, Collaborate"
      description="Effortlessly find and reuse earth science data in the Open Science Catalogue. Execute the workflows on integrated platforms, download or work with the data in the cloud, share your own research results and collaborate on with a vibrant community of EO scientists."
    ></esa-card>
    <esa-card
      icon='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9987 3.33337C10.7987 3.33337 3.33203 10.8 3.33203 20C3.33203 29.2 10.7987 36.6667 19.9987 36.6667C29.1987 36.6667 36.6654 29.2 36.6654 20C36.6654 10.8 29.1987 3.33337 19.9987 3.33337ZM19.9987 33.3334C12.6487 33.3334 6.66536 27.35 6.66536 20C6.66536 12.65 12.6487 6.66671 19.9987 6.66671C27.3487 6.66671 33.332 12.65 33.332 20C33.332 27.35 27.3487 33.3334 19.9987 33.3334ZM27.6487 12.6334L16.6654 23.6167L12.3487 19.3167L9.9987 21.6667L16.6654 28.3334L29.9987 15L27.6487 12.6334Z" fill="green"/></svg>'
      title="NoR Sponsorship"
      description="ESA offes sponsorship opportunities, learn how the costs of data access, storage, and processing on participating platforms, can be covered by the NoR service, allowing researchers to focus on their projects without financial constraints. Learn how your project can benefit from NoR in this guide."
    ></esa-card>
  </esa-cards>
</section>

<script setup>
  import { ref } from "vue";
  import platformsJson from "./integrated-platforms.json" with {type: "json"};
  const platforms = ref(platformsJson)
</script>

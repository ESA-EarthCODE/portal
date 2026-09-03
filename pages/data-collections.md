---
layout: page
---

<section class="blue hero">

# Earth Science Data Collections

The **Earth Science Data Collections** bring related Earth observation and Earth science datasets together by theme as **analysis-ready data (ARD)**. Source data are prepared in consistent, cloud-optimised formats so they can be accessed and analysed together with much less preprocessing.

The collections reduce the time scientists spend finding, downloading, reformatting, and aligning data. This makes it easier to compare variables, visualise data, and move more quickly from data access to exploration and analysis.

The collections are built by and for [scientific communities](/community/scientists/science-clusters) using data published in the [EarthCODE Open Science Catalog](https://opensciencedata.esa.int/products/catalog).

</section>

<section class="light-grey">

## Explore the Collections

   <div v-for="item in clusters" style="box-shadow: 0 20px 30px rgba(0,0,0,0.1); padding: 40px; margin-bottom: 40px;">
      <h3 style="margin-bottom: 40px !important">{{item.title}}</h3>
      <p style="min-height:240px; font-size: 16px !important;">
         <a :href="item.link" style="float: left; padding-right: 40px; transform: translateY(-20px);">
            <img class="alignnone" :src="item.img" :alt="item.title" style="width: min(200px, 30dvw);" />
         </a>
         {{item.description}}
      </p>
   </div>
</section>

<section class="blue hero">

## Help Shape the Collections

Suggest a dataset, share a scientific use case or help test and extend an existing collection. You can also propose a new collection around another Earth system theme by telling us about the scientific need, relevant datasets and the community that could help shape it.

<a class="VPButton cta" href="mailto:earth-code@esa.int" target="_blank">Contribute or propose a collection</a>

</section>

<script setup>
import { ref } from "vue";

const clusters = ref([
{
   title: "ESA Antarctica Datacube",
   link: "/antarctica-cube",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Polar_name1.png",
   description: "The ESA Antarctica Datacube brings together openly available datasets for Antarctica and the Southern Ocean in analysis-ready, cloud-optimised formats that can be accessed and analysed together. The datasets were produced in the frame of ESA Polar Science Cluster activities.",
}
])
</script>

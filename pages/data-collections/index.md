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

   <div
      v-for="item in clusters"
      :key="item.title"
      class="cluster-card"
   >
      <h3 class="cluster-card-title">
         <a
            :href="item.link"
            :target="item.link.startsWith('http') ? '_blank' : undefined"
            :rel="item.link.startsWith('http') ? 'noopener noreferrer' : undefined"
         >{{item.title}}</a>
      </h3>
      <div class="cluster-card-body">
         <div class="cluster-card-image">
            <img class="alignnone" :src="item.img" :alt="item.title" />
         </div>
         <div class="cluster-card-text">
            <p>{{item.description}}</p>
         </div>
      </div>
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
   link: "/data-collections/antarctica-cube",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Polar_name1.png",
   description: "The ESA Antarctica Datacube brings together openly available datasets for Antarctica and the Southern Ocean in analysis-ready, cloud-optimised formats that can be accessed and analysed together. The datasets were produced in the frame of ESA Polar Science Cluster activities.",
}
])
</script>

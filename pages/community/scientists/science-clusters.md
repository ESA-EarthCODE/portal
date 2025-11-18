---
layout: page
---

<section class="blue hero">

# ESA Science Clusters


ESA Science Clusters are collaborative initiatives designed with a purpose to strengthen and advance scientific research across key Earth system science domains such as atmosphere, carbon cycle, hydrology, agriculture, cryosphere, oceans, geohazards. Each cluster is formed by ESA-funded projects and activities, experts, providing domain specific data and tools to promote cross -institutional collaboration, networking and knowledge exchange and joint effort to address common scientific challenges.

</section>

<section class="light-grey">
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

<script setup>
import { ref } from "vue";

const clusters = ref([
{
   title: "ESA Agriculture science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-agriculture-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2024/05/ESA_Science-Clusters_Agriculture-1.png",
   description: "The ESA Agriculture Science Cluster fosters collaboration and innovation in Earth Observation for agriculture. It brings together ESA-funded projects to tackle key challenges such as climate resilience, sustainable production, and food security. EO data from Copernicus and future missions unlocks new applications for monitoring crops, soils, and environmental impacts. Cluster activities directly support EU policies like the Green Deal, Farm to Fork, and Missions on Soil Health and Climate Adaptation. They also contribute to global efforts, including Destination Earth and GEOGLAM.",
},
{
   title: "ESA Atmosphere science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-atmosphere-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Atmosphere_name1.png",
   description: "The ESA Atmosphere Science Cluster advances research on trace gases and the rapidly changing atmospheric composition. It provides scientists with high-quality atmospheric products from past, current, and future missions, fostering international collaboration. The cluster addresses critical knowledge gaps on sources, sinks, precursors, and formation mechanisms of atmospheric compounds. Its work supports climate policy by combining satellite data, in-situ observations, and advanced modelling to understand global change. Through coordinated ESA projects and partnerships, it strengthens a European atmospheric research area under FutureEO.",
},
{
   title: "ESA Carbon science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-carbon-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Carbon_name1.png",
   description: "The ESA Carbon Science Cluster advances understanding of the carbon cycle and its links to climate, water, nutrients, and ecosystems. It tackles key questions on carbon fluxes across land, ocean, and atmosphere, and the growing impact of human-driven CO₂ and CH₄ emissions. By integrating satellite and in-situ observations with modelling, the cluster addresses critical processes such as permafrost thaw, ocean acidification, and ecosystem change. Targeted ESA-funded projects develop consistent, well-characterised data products and strengthen cross-domain carbon research. Through European and international partnerships, the cluster builds a robust carbon cycle research community under ESA’s FutureEO programme.",
},
{
   title: "ESA Ocean science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-ocean-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Ocean_name1.png",
   description: "The ESA Ocean Science Cluster supports research to better understand the ocean’s role in interconnected Earth system processes. It addresses major knowledge gaps across physical oceanography, biogeochemistry, ecology, and ocean–atmosphere–land–cryosphere interactions. By combining EO satellite data, in-situ and citizen observations with advanced modelling, the cluster enables truly interdisciplinary ocean science. ESA-funded projects bring together diverse expertise, data, and technologies to generate results greater than the sum of their parts. Through strong European and international partnerships under FutureEO, the cluster helps build a robust Ocean research community.",
},
{
   title: "ESA Polar science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-polar-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Polar_name1.png",
   description: "The ESA Polar Science Cluster advances understanding of the rapidly changing polar regions and their global impacts. It supports research on the drivers, processes, and consequences of polar change, turning scientific insight into societal and policy-relevant solutions. The cluster promotes integrated science, combining EO satellite data, in-situ and citizen observations, modelling, and new technologies. ESA-funded projects unite diverse expertise and datasets, enabling results greater than the sum of their parts. Through strong European and international partnerships under FutureEO, it helps build a robust Polar research community.",
},
{
   title: "ESA Extremes and Disasters science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-disaster-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2024/09/ESA_Disaster-Cluster_with-title.png",
   description: "The ESA Extremes & Disaster Science Cluster strengthens research on climate extremes and high-impact hazards through coordinated EO innovation. Through coordinated ESA projects and partnerships, it advances understanding of the drivers, precursors, impacts, and forecasts of events such as wildfires, heatwaves, droughts, floods, and storms. The cluster also targets multi-hazard interactions: compounding and cascading risks affecting societies and ecosystems. Its integrated approach combines EO satellite data, in-situ and citizen observations, advanced modelling, and AI to improve preparedness and adaptation.",
},
{
   title: "ESA Hydrology science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-hydrology-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2024/12/Hydrology-KV-with-title.png",
   description: "The ESA Hydrology Science Cluster advances research on the water cycle at a time of growing pressure from population, development, and climate change. It supports improved observation, understanding, and prediction of water cycle processes and their interactions with human activities and ecosystems. By leveraging a new generation of EO missions, in-situ data, modelling, AI, and cloud platforms, the cluster unlocks unprecedented potential for hydrological science. Targeted ESA-funded projects develop consistent data products and address cross-domain challenges across land, ocean, and atmosphere. Through strong European and international partnerships under FutureEO, the cluster helps build a robust hydrology and water cycle research community.",
}
])
</script>

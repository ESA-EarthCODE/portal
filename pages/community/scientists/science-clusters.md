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
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus. In euismod molestie eros ac porta. Sed sed erat vulputate, aliquet mauris gravida, commodo diam. Etiam varius augue et odio ultricies, vel rhoncus erat pharetra. Duis at dolor neque.",
},
{
   title: "ESA Atmosphere science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-atmosphere-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Atmosphere_name1.png",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus. In euismod molestie eros ac porta. Sed sed erat vulputate, aliquet mauris gravida, commodo diam. Etiam varius augue et odio ultricies, vel rhoncus erat pharetra. Duis at dolor neque. Nullam nibh ex, viverra nec urna eu, laoreet gravida justo. Sed et tincidunt libero. Aenean vestibulum, erat sit amet tristique porta, orci eros rutrum tellus, at accumsan magna sem vitae purus.",
},
{
   title: "ESA Carbon science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-carbon-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Carbon_name1.png",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus. In euismod molestie eros ac porta. Sed sed erat vulputate, aliquet mauris gravida, commodo diam. Etiam varius augue et odio ultricies, vel rhoncus erat pharetra. Duis at dolor neque. Nullam nibh ex, viverra nec urna eu, laoreet gravida justo. Sed et tincidunt libero. Aenean vestibulum, erat sit amet tristique porta, orci eros rutrum tellus, at accumsan magna sem vitae purus. Etiam aliquam viverra iaculis. Quisque id porttitor sem. Mauris in scelerisque velit. Vivamus nisl urna, lacinia eget quam at, posuere pulvinar leo.",
},
{
   title: "ESA Ocean science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-ocean-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Ocean_name1.png",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus.",
},
{
   title: "ESA Polar science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-polar-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2020/11/ESA_Science-Clusters_Polar_name1.png",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus. In euismod molestie eros ac porta. Sed sed erat vulputate, aliquet mauris gravida, commodo diam. Etiam varius augue et odio ultricies, vel rhoncus erat pharetra. Duis at dolor neque. Nullam nibh ex, viverra nec urna eu, laoreet gravida justo. Sed et tincidunt libero.",
},
{
   title: "ESA Extremes and Disasters science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-disaster-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2024/09/ESA_Disaster-Cluster_with-title.png",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus. In euismod molestie eros ac porta. Sed sed erat vulputate, aliquet mauris gravida, commodo diam. Etiam varius augue et odio ultricies, vel rhoncus erat pharetra. Duis at dolor neque. Nullam nibh ex, viverra nec urna eu, laoreet gravida justo. Sed et tincidunt libero. Aenean vestibulum, erat sit amet tristique porta, orci eros rutrum tellus, at accumsan magna sem vitae purus. Etiam aliquam viverra iaculis. Quisque id porttitor sem. Mauris in scelerisque velit. Vivamus nisl urna, lacinia eget quam at, posuere pulvinar leo.",
},
{
   title: "ESA Hydrology science cluster",
   link: "https://eo4society.esa.int/communities/scientists/esa-hydrology-science-cluster/",
   img: "https://eo4society.esa.int/wp-content/uploads/2024/12/Hydrology-KV-with-title.png",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat arcu id sapien sollicitudin, nec vulputate arcu aliquam. Suspendisse ac ultricies lorem. Vivamus maximus maximus augue, eu tristique urna pharetra a. Ut semper facilisis tempus. In euismod molestie eros ac porta. Sed sed erat vulputate, aliquet mauris gravida, commodo diam.",
}
])
</script>
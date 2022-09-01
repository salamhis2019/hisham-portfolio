<template>
  <div class="nav">
    <div class="content-container">
      <nav class="nav-items-container">
        <router-link
          v-for="({navText, link}) in navItems"
          :to="`/${link}`"
          :key="navText"
          class="nav-item"
          :class="{'active': route.params.currentPage === link}"
        >
          <li>{{ navText }}</li>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import WorkExperience from "@/components/Work-section.vue";
import HomePage from "@/components/home-page.vue";
import ProjectsSection from "@/components/projects-section.vue";
import AboutMe from "@/components/about-me.vue";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();
const route = useRoute();

const { currentComponent } = storeToRefs(portfolioStore);

const navItems: any = [
  {
    "navText": 'Home',
    "link": 'home'
  },
  {
    "navText": 'Projects',
    "link": 'projects'
  },
  {
    "navText": 'Work Experience',
    "link": "work-experience"
  },
  {
    "navText": 'About Me',
    "link": "about-me"
  }
];

const components: any = [
  {
    "home": HomePage,
  },
  {
    "projects": ProjectsSection
  },
  {
    "work-experience": WorkExperience,
  },
  {
    "about-me": AboutMe
  }
]

currentComponent.value = HomePage;

const param = computed(() => route.params.currentPage)

function setComponentOnPageLoad(param: any) {
  components.forEach((component: any) => {
    console.log(component);
    const keys = Object.keys(component);
    console.log(keys[0]);
    console.log(param);
    if (keys[0] === param) {
      currentComponent.value = component[param];
    }
  })
}

watch(param, (current) => {
  setComponentOnPageLoad(current);
})

setComponentOnPageLoad(param.value);
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #333533;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    #004cff,
    #ff0080,
    #004cff
  );
  border-image-slice: 1;
  .content-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin: 0 2rem;
    color: white;
    h1 {
      font-family: "Source Code Pro";
      margin: 0;
    }
    .nav-items-container {
      display: flex;
      align-items: center;
      .nav-item {
        margin: 0 0.5rem;
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        transition: 0.2s ease;
        li {
          list-style-type: none;
          margin: 0 1rem;
          font-family: "Source Sans Pro";
          transition: 0.2s ease;
        }
        :hover {
          color: rgba(255, 255, 255, 0.724);
        }
      }
      .active {
        background-color: rgba(255, 255, 255, 0.10);
        padding: 0.5rem 0;
        border: 0.5px solid rgba(255, 255, 255, 0.498);
        border-radius: 12px;
        box-shadow: 2px 2px 0px white;
      }
    }
  }
}
</style>

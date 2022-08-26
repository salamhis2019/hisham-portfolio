<template>
  <div class="nav">
    <div class="content-container">
      <h1>Hisham Salameh</h1>
      <nav class="nav-items-container">
        <router-link
          v-for="({navText, param, link}) in navItems"
          :to="`/${link}`"
          :key="navText"
          @click="setComponent(param)"
          :class="{}"
        >
          <a href="#">{{ navText }}</a>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from "vue";
import { storeToRefs } from "pinia";
import WorkExperience from "@/components/Work-experience.vue";
import ProjectsSection from "@/components/projects-section.vue";
import AboutMe from "@/components/about-me.vue";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();

const { currentComponent } = storeToRefs(portfolioStore);

const navItems = [
  {
    "navText": 'Projects',
    "param": ProjectsSection,
    "link": 'projects'
  },
  {
    "navText": 'Work Experience',
    "param": WorkExperience,
    "link": "work-experience"
  },
  {
    "navText": 'About Me',
    "param": AboutMe,
    "link": "about-me"
  }
];

currentComponent.value = ProjectsSection;

function setComponent(component: any) {
  currentComponent.value = shallowRef(component);
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #333533;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(34, 152, 255, 0.793),
    rgba(255, 0, 128),
    rgba(34, 152, 255, 0.793)
  );
  border-image-slice: 1;
  .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin: 0 2rem;
    color: white;
    h1 {
      font-family: "Source Code Pro";
      margin: 0;
    }
    .nav-items-container {
      display: flex;
      li {
        list-style-type: none;
        margin: 0 1rem;
        font-family: "Source Sans Pro";
        transition: 0.2s ease;
        a {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
        }
        :hover {
          color: rgba(255, 255, 255, 0.724);
        }
      }
    }
  }
}
</style>

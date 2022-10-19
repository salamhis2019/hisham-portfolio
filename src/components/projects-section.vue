<template>
  <div class="work-experience-container">
    <div class="work-experience-content">
      <div class="header-container">
        <div class="header-content">
          <h2 class="section-header">
            Projects<span class="period"> .</span>
          </h2>
          <p class="description">Here are some of the awesome projects that I have created in my time doing web development.</p>          
        </div>
      </div>
      <hr>
      <div class="project-buttons-container">
        <button 
          class="button-class stock-project"
          :class="{'active': currentProject === 'stock-project'}"
          @click="setProject('stock-project')"
        >
          Vantage API Stock Project
        </button>
        <button 
          class="button-class portfolio-project"
          :class="{'active': currentProject === 'portfolio-project'}"
          @click="setProject('portfolio-project')"
        >
          Personal Portfolio Project
        </button>
      </div>
        <SingleProject
          v-if="currentProject === 'stock-project'"
          :current-project="currentProject"
          :project="project1"
          :image="currentImage"
        />
        <SingleProject
          v-if="currentProject === 'portfolio-project'"
          :current-project="currentProject"
          :project="project2"
          :image="currentImage"
        />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Project from '@/json/projects';
import SingleProject from '@/components/single-project.vue'

const currentProject = ref();
const currentImage = ref();

const project1 = Project[0]
const project2 = Project[1]

function setProject(project: string) {
  currentProject.value = project;
}
</script>

<style lang="scss" scoped>
.work-experience-container {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 650px;
  background: #13141a;
  .work-experience-content {
    width: 900px;
    .header-container {
      display: flex;
      align-items: center;
      justify-content: left;
      height: 300px;
      padding-bottom: 2rem;
      .description {
        font-family: 'Source Sans Pro';
        font-size: 1.2rem;
        color: white;
      }
      .section-header {
        margin-bottom: 3rem;
        font-size: 4rem;
        font-family: 'Source Code Pro';
        color: white;
        .period {
          font-size: 5rem;
          font-family: 'Oswald';
          background: -webkit-linear-gradient(#004cff, #ff0080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    hr {
      border: 0;
      height: 2.5px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
      margin-bottom: 4rem;
    }
  }
  @media only screen and (max-width: 450px) {
    .work-experience-content {
      margin: 1rem;
    }
  }
  .project-buttons-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 4rem;
    .button-class {
      padding: 0.5rem 1rem;
      color: rgba(255, 255, 255, 0.957);
      background: #ff0080;
      font-size: 1.2rem;
      font-weight: 600;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        color: #ffffffb6
      }
    }
    .active {
      box-shadow: 2px 2px 0px white;
    }
  }
  @media only screen and (max-width: 450px) {
    .content-container {
      display: block;
      width: 100%;
      .stock-icon {
        display: flex;
        justify-content: center;
        margin: 0 auto 3rem auto;
      }
    }
  }
}
</style>

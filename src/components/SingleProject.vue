<template>
  <section class="single-project" role="contentinfo" aria-label="single project">
    <div class="info-container">
      <h3 role="heading">{{ project.title }}</h3>

      <ul class="description-container" aria-label="Project Description">
        <li
          v-for="item in project.description"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
  
      <h3>Skills</h3>
  
      <ul v-if="project.skills" class="skills-container" aria-label="Project Skills">
        <li
          v-for="skill in project.skills"
          :key="skill"
          class="skill"
        >
          {{ skill }}
        </li>
      </ul>
    </div>

    <div class="image-container">
      <span>This is an image</span>
      <img :src="project.imageUrl" alt="project image" />
    </div>
  </section>

  <hr v-if="showDivider" aria-hidden="true">
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Project } from '@/types/projects.types';

/** Props */

interface Props {
  project: Project;
  showDivider: boolean;
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.single-project {
  display: flex;
  gap: 2rem;
  max-width: 1300px;
  width: 100%;
  margin: 2rem auto;

  .stock-icon {
    width: 240px;
    height: 240px;
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  h3 {
    margin: 0;
    color: white;
    font-family: 'Source Sans Pro';
    font-size: 2rem;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0;
    font-family: 'Source Code Pro';

    .skill {
      list-style-type: none;
      color: white;
      background: #323f61;
      margin: 0;
      padding: 0.5rem 1.5rem;
      border-radius: 5px;
    }
  }

  .description-container {
    padding: 0;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-family: 'Source Sans Pro';
    font-weight: 600;
    color: rgba(255, 255, 255, 0.739);

    li {
      list-style-type: none;
      margin-bottom: 1.2rem;
    }
  }

  .image-container {
    min-width: 500px;
    max-height: 500px;
    background-color: var(--color-white);
    border-radius: 12px;
  }
}

hr {
  border: 0;
  height: 2.5px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
  margin-bottom: 4rem;
}
</style>
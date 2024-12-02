<template>
  <section
    role="contentinfo"
    class="work-experience"
    aria-label="Work experience details"
  >

    <!-- Company Title -->
    <h3 class="title company-title" role="heading">
      {{ experience.company }}
    </h3>

    <template
      v-for="({ title, date, responsibilities, skills }, index) in experience.positions"
      :key="`${title}-${index}`"
    >
      <header class="title-container">

        <!-- Job Title -->
        <p class="job-title">{{ title }}</p>

        <!-- Date -->
        <p class="date">{{ date }}</p>
      </header>

      <ul
        class="description-container"
      >
        <li
          v-for="(description) in responsibilities"
          :key="description"
          aria-label="Position Responsibilities"
        >
          {{ description }}
        </li>
      </ul>

      <ul
        class="skill-badges-container"
        v-if="skills"
        aria-label="Skills"
      >
        <li
          v-for="(skill, index) in skills"
          :key="`${skill}-${index}`"
          class="skill-badge"
        >
          {{ skill }}
        </li>
      </ul>

      <!-- Divider for multiple positions in a company -->
      <hr
        v-if="showPositionsDivider(experience.positions, index)"
        aria-hidden="true"
      >
    </template>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
  experience: any;
}

defineProps<Props>();

const showPositionsDivider = (positions: any, index: number): boolean => {
  return positions.length > 1 && index !== positions.length - 1;
};
</script>

<style lang="scss" scoped>
.work-experience {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
  padding: 2rem;
  font-family: 'Source Sans Pro';
  border: 0.5px solid #ffffff20;
  color: var(--color-white);
  border-radius: 15px;
  background: linear-gradient(to right, #191919, #222322);
  box-shadow: 5px 5px 0px var(--color-white);

  .company-title {
    margin-bottom: 1rem;
    color: var(--color-white);
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 3px 3px 0px #ff0080b7;
  } 

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .date {
      font-size: 1rem;
      font-style: italic;
    }

    .job-title {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  .skill-badges-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1.5rem 0 0 0;
    padding: 0;

    li {
      list-style-type: none;
      color: var(--color-black);
      font-weight: 600;
      font-family: 'Source Code Pro';
      padding: 0.5rem 1.5rem;
      background: #ff00d9;
      border-radius: 5px;
      box-shadow: 2px 2px 0px var(--color-white);
    }
  }

  hr {
    border: 0;
    height: 1px;
    width: 75%;
    margin: 3rem auto;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.475), var(--color-white), rgba(255, 255, 255, 0.503));
    border-radius: 15px;
  }
}
</style>

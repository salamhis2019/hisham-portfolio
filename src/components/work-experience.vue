<template>
  <div class="experience-container">
    <div class="job-overview">
      <p class="logo">{{ logo }}</p>
    </div>
    <div class="job-description">
      <div class="title-container">
        <p class="title">{{ companyTitle }} - {{ jobTitle }}</p>
        <p class="date">{{ date }}</p>
      </div>
      <ul>
        <li>
          {{ bulletOne }}
        </li>
        <li>
          {{ bulletTwo }}
        </li>
        <li>
          {{ bulletThree }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps([
  "companyTitle",
  "logo",
  "jobTitle",
  "date",
  "bulletOne",
  "bulletTwo",
  "bulletThree"
])
</script>

<style lang="scss" scoped>
.experience-container {
display: flex;
gap: 2rem;
font-family: 'Source Sans Pro';
color: white;
  .job-description, .job-overview {
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  .job-overview {
    h3 {
      font-size: 2rem;
    }
    .logo {
      font-size: 7rem;
    }
  }
  .job-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .title {
        font-size: 2rem;
        font-weight: 500;
      }
      .date {
        font-size: 1.2rem;
        font-style: italic;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0;
      margin: 0;
      list-style-type: none;
      li {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
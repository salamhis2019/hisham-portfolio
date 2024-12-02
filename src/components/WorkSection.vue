<template>
  <section id="work-experience" class="work-section">

    <div class="work-experience-container">
      <header class="header-container">

        <!-- Work Section Header -->
        <h1 class="section-header">
          Work Experience<span class="period"> .</span>
        </h1>

        <p class="description">Here are all of my most recent experiences with web development and what I have learned.</p>
      </header>

      <hr>

      <work-experience
        v-for="experience in JobsMock"
        :key="experience.company"
        :experience="experience"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import WorkExperience from "@/components/WorkExperience.vue";
import JobsMock from '../json/jobs.mocks';
</script>

<style lang="scss" scoped>
.work-section {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--color-black);

  .work-experience-container {
    padding: 2rem;

    .header-container {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: left;
      margin-bottom: 3rem;

      .description {
        font-family: 'Source Sans Pro';
        font-size: 1.2rem;
        color: var(--color-white);
      }

      .section-header {
        font-size: 3rem;
        font-family: 'Source Code Pro';
        color: var(--color-white);
        margin: 0;

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
}
</style>

<template>
  <div id="projects" class="projects-section">
    <header class="header-container">
      <h2 class="section-header">
        Projects
        <span class="period"> .</span>
      </h2>

      <p class="description">
        Here are some of the awesome projects that I have created in my time doing web development.
      </p>
    </header>

    <hr />

    <single-project
      v-for="(project, index) in projects"
      :key="`${project.title}-${index}`"
      id="stock-project"
      :project="project"
      :show-divider="showSectionDivider(projects, index)"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useBootstrapStore } from '@/stores/bootstrap.store';
import { storeToRefs } from 'pinia';
import SingleProject from '@/components/SingleProject.vue';
import { showSectionDivider } from '@/helpers/divider-helper';

/** Pinia */

const bootstrapStore = useBootstrapStore();

const { projects } = storeToRefs(bootstrapStore);

/** Lifecycle Hooks */

onMounted((): void => {
  bootstrapStore.getProjects();
});
</script>

<style lang="scss" scoped>
.projects-section {
  background: #13141a;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  .header-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: left;
    margin: 0 auto 3rem auto;
    max-width: 1300px;
    width: 100%;

    .section-header {
      font-size: 3rem;
      font-family: 'Source Code Pro';
      color: var(--color-white);

      .period {
        font-size: 5rem;
        font-family: 'Oswald';
        background: -webkit-linear-gradient(#004cff, #ff0080);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .description {
      font-family: 'Source Sans Pro';
      font-size: 1.2rem;
      color: var(--color-white);
    }
  }

  hr {
    width: 100%;
    max-width: 80%;
    height: 2.5px;
    margin-bottom: 4rem;
    border: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
}
</style>

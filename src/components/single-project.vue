<template>
  <div 
    class="banner"
    :class="currentProject === 'stock-project' ? 'stock-banner' : 'portfolio-banner'"
  >
  </div>
  <div class="content-container">
    <div
      class="card-container">
      <h3>{{ project.title }}</h3>
      <ul class="description-container">
        <li
          v-for="item in project.description"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
      <ButtonLinks 
        :text="'Personal Portfolio Project'"
        :link="project.link"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import ButtonLinks from '@/components/button-links.vue';

defineProps(['project', 'currentProject', 'image'])
</script>

<style lang="scss" scoped>
.banner {
  height: 200px;
  width: 100%;
  margin-bottom: 3rem;
  border-radius: 15px;
  box-shadow: 4px 4px 0px white;
}
.stock-banner {
  background: linear-gradient(to right, #0048184b, #00ff1e81), url('@/assets/project-section/stock.png');
  background-size: cover;
  background-position: center;
}
.portfolio-banner {
  background: linear-gradient(to right, #004cff4b, #ff008081), url('@/assets/project-section/portfolio.png');
  background-size: cover;
  background-position: center;
}
.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110%;
  min-height: 300px;
  margin-bottom: 5rem;
  .stock-icon {
    width: 240px;
    height: 240px;
    transition: 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  .card-container {
  height: 100%;
  width: 650px;
  h3 {
    margin: 0;
    color: white;
    font-family: 'Source Sans Pro';
    font-size: 2rem;
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
}
}

@media only screen and (max-width: 450px) {
  .card-container {
    width: 100%;
    h3 {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
}
</style>
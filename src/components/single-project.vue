<template>
  <div
    v-for="{ title, description } in Projects"
    :key="title"
    class="card-container">
    <h3>{{ title }}</h3>
    <ul class="description-container">
      <li
        v-for="item in description"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import Projects from '@/json/projects.js'
</script>

<style lang="scss" scoped>
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
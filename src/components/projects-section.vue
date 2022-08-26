<template>
  <div class="work-experience-container">
    <div class="work-experience-content">
      <div class="header-container">
        <h2 class="section-header">
          Projects
        </h2>
      </div>
      <div class="content-container">
        <img class="stock-icon" src="@/assets/stock-icon.png" alt="">
      </div>      
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.work-experience-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .section-header {
    font-size: 4rem;
    font-family: 'Source Code Pro';
    color: white;
    .period {
      height: 20px;
      font-size: 7rem;
      font-family: 'Oswald';
    }
  }
  .content-container {
    width: 600px;
    .stock-icon {
      width: 15rem;
    }
  }
}
</style>

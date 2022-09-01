<template>
  <div class="work-experience-container">
    <div class="work-experience-content">
      <div class="header-container">
        <div class="header-content">
          <h2 class="section-header">
            Work Experience<span class="period"> .</span>
          </h2>
          <p class="description">Here are all of my most recent experiences with web development and what I have learned.</p>          
        </div>
      </div>
      <hr>
      <WorkExperience />
    </div>
  </div>
</template>

<script lang="ts" setup>
import WorkExperience from "@/components/work-experience.vue";
</script>

<style lang="scss" scoped>
.work-experience-container {
  display: flex;
  justify-content: center;
  width: 100%;
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
}
</style>

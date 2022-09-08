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
      <div class="banner stock-banner"></div>
      <div class="content-container">
        <img class="stock-icon" src="@/assets/stock-icon.png" alt="">
        <SingleProject 
          :project="project1"
        />
      </div>      
      <div class="banner portfolio-banner"></div>
      <div class="content-container">
        <img class="stock-icon" src="@/assets/portfolio-icon.png" alt="">
        <SingleProject 
          :project="project2"
        />
      </div>     
    </div>
  </div>
</template>

<script lang="ts" setup>
import Project from '@/json/projects';
import SingleProject from '@/components/single-project.vue'

const project1 = Project[0]
const project2 = Project[1]
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
  @media only screen and (max-width: 450px) {
    .work-experience-content {
      margin: 1rem;
    }
  }
  .stock-banner {
    background: linear-gradient(to right, #004cff4b, #ff008081), url('@/assets/project-section/stock.png');
  }
  .portfolio-banner {
    background: linear-gradient(to right, #004cff4b, #ff008081), url('@/assets/project-section/portfolio.png');
  }
  .banner {
    height: 200px;
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    box-shadow: 4px 4px 0px white;
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

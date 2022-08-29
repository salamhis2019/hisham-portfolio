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
        <div class="card-container">
          <h3>Stock Project with Vantage API</h3>
          <ul class="description-container">
            <li>
              Developed a stock app that displays recent closing data from various stocks/cryptos from a public API. 
            </li>
            <li>
              The UI was created using Vue 3 and SASS, and the data was fetched using axios and the fetch API.
            </li>
            <li>
              Utilized the most recent vue features and rendered the components dynamically between the two apps. Reusability concepts were implemented for readability and the chart.js library was used to render the stock chart.
            </li>
            <li>
              Used Pinia to maintain the state of the app and utilized the composition API.
            </li>
          </ul>
          <ButtonLinks 
            :text="'Vue Stock App'"
            :link="'https://vuestockapp.firebaseapp.com/'"
          />
        </div>
      </div>      
      <div class="banner portfolio-banner"></div>
      <div class="content-container">
        <img class="stock-icon" src="@/assets/portfolio-icon.png" alt="">
        <div class="card-container">
          <h3>Portfolio Project with Vue</h3>
          <ul class="description-container">
            <li>
              Developed a personal portfolio site using Vue 3 and the script setup with Vite, Pinia and SASS
            </li>
            <li>
              Tested the application using vue test utils and jest, includes unit and store testing
            </li>
            <li>
              Utilized the most recent vue features and created the portfolio by making it route driven
            </li>
            <li>
              Implemented good github hygeine by creating semantic commits and working on different branches for features
            </li>
          </ul>
          <ButtonLinks 
            :text="'Personal Portfolio Project'"
            :link="'https://vuestockapp.firebaseapp.com/'"
          />
        </div>
      </div>     
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonLinks from '@/components/button-links.vue';
</script>

<style lang="scss" scoped>
.work-experience-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #1c202b;
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
}
</style>

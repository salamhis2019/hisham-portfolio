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
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110%;
    min-height: 300px;
    margin-bottom: 3rem;
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

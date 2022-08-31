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
      <div class="experience-container">
        <div class="job-overview">
          <h3>Apple</h3>
          <p class="logo"></p>
        </div>
        <div class="job-description">
          <div class="title-container">
            <p class="title">UI Engineering Intern</p>
            <p class="date">05/31/2022 - 08/26/2022</p>
          </div>
          <ul>
            <li>
              Own and drive UI assigned tasks for all phases from development to production
            </li>
            <li>
              Become subject matter expert for intern project while working with technical leaders
            </li>
            <li>
              Adhere to various processes defined within team such as Agile, code review, or Git.
            </li>
          </ul>
        </div>
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
}
</style>

<template>
  <section
    v-for="workplace in workExperience"
    :key="workplace.company"
    class="experience-container">
    <div class="job-description">
      <p class="title company-title">
        {{ workplace.company }}
      </p>
      <div
        v-for="({ title, date, responsibilities, skills }, index) in workplace.positions"
        :key="title"
        class="positions-container"
      >
        <div class="title-container">
          <p class="job-title">{{ title }}</p>
          <p class="date">{{ date }}</p>
        </div>
        <ul
          class="description-container"
        >
          <li
            v-for="(description) in responsibilities"
            :key="description"
          >
            {{ description }}
          </li>
        </ul>
        <ul
          class="skill-badges-container"
          v-if="skills"
        >
          <li
            v-for="item in skills"
            :key="item"
            class="skill-badge"
          >
            {{ item }}
          </li>
        </ul>
        <hr
          v-if="index === 0 && workplace.positions.length == 2"
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Jobs from "@/json/jobs.js";

const workExperience = Jobs
</script>

<style lang="scss" scoped>
.experience-container {
  display: flex;
  margin-bottom: 4rem;
  padding: 2rem;
  gap: 3rem;
  font-family: 'Source Sans Pro';
  color: white;
  border-radius: 15px;
  background: linear-gradient(to right, #333533, #3f403f);
  box-shadow: 6px 6px 0px white;
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
      font-size: 8rem;
    }
  }
  .job-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .company-title {
      color: white;
      font-size: 2rem;
      font-weight: 700;
      text-shadow: 3px 3px 0px #ff0080b7;
    }
    .positions-container {
      .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 1rem;
        .title {
          font-size: 1.5rem;
          font-weight: 500;
        }
        .date {
          font-size: 1.2rem;
          font-style: italic;
        }
        .job-title {
          font-size: 1.5rem;
        }
      }
      .description-container {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        padding: 0;
        margin: 0;
        list-style-type: none;
        li {
          font-size: 1.2rem;
          font-weight: 300;
        }
      }
      .skill-badges-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 1.5rem 0 0 0;
        padding: 0;
        li {
          list-style-type: none;
          font-family: 'Source Code Pro';
          padding: 0.5rem 1.5rem;
          background: #323f61;
          border-radius: 5px;
          box-shadow: 1px 1px 0px white;
        }
      }
      hr {
        border: 0;
        height: 5px;
        width: 75%;
        margin-top: 2rem;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.475), white, rgba(255, 255, 255, 0.503));
        border-radius: 15px;
      }
    }
  }
}
@media only screen and (max-width: 450px) {
  .experience-container {
    margin: 2rem 1rem;
  }
}
</style>
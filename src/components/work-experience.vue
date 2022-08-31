<template>
  <div
    v-for="workplace in workExperience"
    :key="workplace.company"
    class="experience-container">
    <div class="job-description">
      <p class="title company-title">
        {{ workplace.company }}
      </p>
      <div
        v-for="{ title, date, responsibilities } in workplace.positions"
        :key="title"
        class="positions-container"
      >
        <div class="title-container">
          <p class="job-title">{{ title }}</p>
          <p class="date">{{ date }}</p>
        </div>
        <ul
          v-for="description in responsibilities"
          :key="description"
        >
          <li>
            {{ description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Jobs from "@/json/jobs.js";

const workExperience = Jobs
</script>

<style lang="scss" scoped>
.experience-container {
  display: flex;
  width: 700px;
  margin-bottom: 2rem;
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
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .title {
        font-size: 1.5rem;
        font-weight: 500;
      }
      .date {
        font-size: 1.2rem;
        font-style: italic;
      }
    }
    .job-title {
      font-size: 1.5rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0;
      margin: 0;
      list-style-type: none;
      li {
        font-size: 1.2rem;
        font-weight: 300;
      }
    }
  }
}
</style>
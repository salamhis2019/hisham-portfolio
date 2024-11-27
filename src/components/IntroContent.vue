<template>
  <section class="intro-content" aria-labelledby="intro-header">

    <!-- Fetch Profile Pic from API -->
    <img
      class="profile-picture"
      src="@/assets/homepage/headshot.png"
      alt="Headshot of Hisham"
    >

    <div class="intro-container">
      <header>

        <!-- TODO: get name from API response -->
        <h1 class="section-header" role="heading">
          👋
          <span class="name">{{ name }}</span>
          <span class="period">.</span>
        </h1>
      </header>

      <!-- TODO: get intro desc from API -->
      <p class="description">{{ description }}</p>

      <ul class="links-container">

        <!-- LinkedIn Icon -->
        <li>
          <a
            href="https://www.linkedin.com/in/hishamsalameh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <i class="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>

        <!-- Github Icon -->
        <li>
          <a
            href="https://github.com/salamhis2019"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <i class="fa fa-github" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

/** State */

const name = ref("Hisham Salameh")
const description = ref("UI Engineer and UX Designer with a focus on creating modern web applications")
</script>

<style lang="scss" scoped>
.intro-content {
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  background: linear-gradient(to right, rgb(40, 0, 40), black);
  overflow: hidden;

  .profile-picture {
    width: 18rem;
    height: 18rem;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 1 / 1;
    border: 5px solid var(--color-white);
    box-shadow: 0 4px 15px rgba(168, 168, 168, 0.5);
  }

  .intro-container {
    display: flex;
    flex-direction: column;
    width: 900px;
    padding: 2rem;
    font-family: 'Source Code Pro';

    .section-header {
      font-size: 4rem;
      color: var(--color-white);
      margin: 0;

      .name {
        text-shadow: 3px 3px 0px #ff0080c0;
      }

      .period {
        font-family: 'Oswald';
        font-size: 6rem;
        background: -webkit-linear-gradient(#0088ff, #ff00bb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .description {
      margin: 0.5rem;
      color: var(--color-secondary);
      font-size: 1.5rem;
      font-weight: 600;
    }

    .links-container {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 0;
      list-style-type: none;

      .fa-linkedin {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #13141a;
        background: var(--color-white);
        font-size: 3rem;
        height: 69px;
        width: 69px;
        border-radius: 50%;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
          background: -webkit-linear-gradient(#004cff, #ff0080);
        }
      }

      .fa-github {
        color: var(--color-white);
        font-size: 5rem;
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
          background: -webkit-linear-gradient(#004cff, #ff0080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>

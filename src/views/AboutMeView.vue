<template>
  <section id="about-me" class="about-me-view">
    <div class="about-me-container">
      <header class="about-header">
        <h2 class="section-header">About Me<span class="period"> .</span></h2>

        <hr />
      </header>

      <div class="about-content-container">
        <div class="bio-content" role="contentinfo" aria-label="personal bio">
          <h2 class="bio-header">Bio</h2>

          <p
            v-for="(item, index) in aboutMeInfo.bio"
            :key="index"
            v-dompurify-html="item"
            class="bio-item"
          />
        </div>

        <section class="skills-container" role="contentinfo" aria-label="skills">
          <h2 class="skills-header">Skills</h2>
          <ul class="technical-skills">
            <li v-for="skill in aboutMeInfo.technicalSkills" :key="skill" class="skill">
              {{ skill }}
            </li>
          </ul>

          <h2 class="skills-header">Soft Skills</h2>
          <ul class="soft-skills">
            <li v-for="skill in aboutMeInfo.softSkills" :key="skill" class="skill soft">
              {{ skill }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useBootstrapStore } from '@/stores/bootstrap.store';

const bootstrapStore = useBootstrapStore();

const { aboutMeInfo } = storeToRefs(bootstrapStore);

onMounted((): void => {
  bootstrapStore.getAboutMeInfo();
});
</script>

<style lang="scss" scoped>
.about-me-view {
  display: flex;
  justify-content: center;
  width: 100%;
  background: var(--color-black);
  padding: 2rem 0;

  .about-me-container {
    width: 1300px;
    margin: 0 2rem;
  }

  .about-header {
    margin: 2rem 0;

    .section-header {
      margin-bottom: 2rem;
      font-size: 3rem;
      font-family: 'Source Code Pro';
      color: var(--color-white);

      .period {
        font-size: 3rem;
        font-family: 'Oswald';
        background: -webkit-linear-gradient(#004cff, #ff0080);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    hr {
      border: 0;
      height: 2.5px;
      background-image: linear-gradient(to right, #00000000, #ffffffbf, #00000000);
      margin-bottom: 4rem;
    }
  }

  .about-content-container {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;

    .bio-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: 'Source Sans Pro';
      color: var(--color-white);

      .bio-header {
        margin: 0;
        font-family: 'Source Sans Pro';
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-white);
      }

      .bio-item {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0;

        .key-word {
          font-weight: 700;
        }
      }
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 50%;

      .skills-header {
        margin: 0;
        font-family: 'Source Sans Pro';
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-white);
      }

      .technical-skills,
      .soft-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 0;
        padding: 0;
        font-family: 'Source Code Pro';

        .skill {
          list-style-type: none;
          color: var(--color-white);
          background: #323f61;
          margin: 0;
          padding: 0.5rem 1.5rem;
          border-radius: 5px;
        }

        .soft {
          background: #ff0080ba;
        }
      }
    }
  }
}
</style>

<template>
  <section id="intro-content" class="intro-content" aria-labelledby="intro-heading">
    <div class="content-wrapper">
      <img class="profile-picture" src="@/assets/homepage/headshot.png" alt="Headshot of Hisham" />

      <div class="intro-container">
        <header class="header-section">
          <p class="greeting-text">Hello, I'm</p>
          <h1 id="intro-heading" class="section-header" tabindex="0">{{ name }}</h1>
        </header>

        <p class="description">{{ description }}</p>

        <ul class="links-container" aria-label="Connect with me">
          <li v-for="link in socialLinks" :key="link.id">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.ariaLabel"
              :class="['social-link', link.id]"
            >
              <i :class="['fa', link.icon]" aria-hidden="true" />
              <span class="social-name">{{ link.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SOCIAL_LINKS } from '@/constants/SocialLinks.const';

/** State */

const name = ref<string>('Hisham Salameh');
const description = ref<string>(
  'Full Stack Web Engineer at Apple, building accessible, high-performance web experiences with React, Vue, and TypeScript.',
);
const socialLinks = ref(SOCIAL_LINKS);
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.intro-content {
  padding: 6rem 0 4rem;

  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }
  }

  .profile-picture {
    width: 11rem;
    height: 11rem;
    flex-shrink: 0;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .intro-container {
    flex: 1;
    max-width: 600px;

    .header-section {
      margin-bottom: 1rem;

      .greeting-text {
        @include text-greeting();
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 0.25rem;
      }

      .section-header {
        @include text-base();
        font-size: var(--font-size-2xl);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-tight);
        color: #ffffff;

        @media (max-width: 768px) {
          font-size: var(--font-size-xl);
        }
      }
    }

    .description {
      @include text-base();
      font-size: var(--font-size-lg);
      color: rgba(255, 255, 255, 0.75);
      line-height: var(--line-height-relaxed);
      margin-bottom: 1.5rem;
    }

    .links-container {
      display: flex;
      gap: 0.75rem;
      padding: 0;
      margin: 0;
      list-style: none;

      @media (max-width: 768px) {
        justify-content: center;
      }

      .social-link {
        @include text-base();
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.85);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: border-color 0.15s ease, color 0.15s ease;

        &:hover {
          text-decoration: none;
          color: #ffffff;
        }

        &.linkedin:hover {
          border-color: #0077b5;
        }

        &.github:hover {
          border-color: #58a6ff;
        }

        i {
          font-size: var(--font-size-lg);
        }
      }
    }
  }
}
</style>

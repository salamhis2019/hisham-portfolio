<template>
  <footer class="footer-wrapper">
    <div class="footer-content">
      <!-- Main Content -->
      <div class="footer-main">
        <!-- Creator Section -->
        <div class="creator-section">
          <h3 class="creator-name">Hisham Salameh</h3>
          <p class="creator-title">UI Engineer & UX Designer</p>
        </div>

        <!-- Built With Section -->
        <div class="tech-section">
          <h4 class="section-title">Built With</h4>
          <ul class="tech-stack">
            <li v-for="tech in TECH_STACK" :key="tech.id" class="tech-item">
              <img :src="tech.icon" :alt="tech.alt" class="tech-icon" />
              <span class="tech-name">{{ tech.name }}</span>
            </li>
          </ul>
        </div>

        <!-- Connect Links -->
        <div class="connect-section">
          <h4 class="section-title">Connect</h4>
          <ul class="connect-links">
            <li v-for="link in SOCIAL_LINKS" :key="link.id">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :class="['connect-link', link.id]"
                :aria-label="link.ariaLabel"
              >
                <i :class="['fa', link.icon]" aria-hidden="true" />
                <span class="link-text">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-info">
          <p class="copyright">© {{ currentYear }} Hisham Salameh. All rights reserved.</p>
          <p class="location">Austin, Texas</p>
        </div>

        <button class="back-to-top" @click="scrollToTop" aria-label="Scroll to top">
          <span class="arrow-icon">↑</span>
          <span class="button-text">Top</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { SOCIAL_LINKS } from '@/constants/SocialLinks.const';
import { TECH_STACK } from '@/constants/TechStack.const';

// Computed Properties
const currentYear = computed(() => {
  return new Date().getFullYear();
});

// Methods
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.footer-wrapper {
  width: 100%;
  background: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 3rem 0 1.5rem;

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;

    .footer-main {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 3rem;

      .creator-section {
        .creator-name {
          @include text-heading(var(--font-size-3xl));
          margin: 0 0 0.5rem 0;
        }

        .creator-title {
          @include text-body(var(--font-size-lg));
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
      }

      .tech-section,
      .connect-section {
        .section-title {
          @include text-label();
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1rem 0;
        }
      }

      .tech-section {
        .tech-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
          margin: 0;
          padding: 0;

          .tech-item {
            @include text-base();
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: var(--font-size-sm);
            transition: color 0.3s ease;

            &:hover {
              color: rgba(255, 255, 255, 1);
            }

            .tech-icon {
              width: 20px;
              height: 20px;
              object-fit: contain;
            }

            .tech-name {
              font-weight: var(--font-weight-medium);
            }
          }
        }
      }

      .connect-section {
        .connect-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            display: flex;
          }

          .connect-link {
            @include text-base();
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: var(--font-size-sm);
            transition: all 0.3s ease;
            flex: 1;

            &:hover {
              color: rgba(255, 255, 255, 1);
              transform: translateX(5px);
            }

            &.linkedin:hover {
              color: #0077b5;
            }

            &.github:hover {
              color: #58a6ff;
            }

            i {
              font-size: var(--font-size-lg);
              width: 20px;
              text-align: center;
            }

            .link-text {
              font-weight: var(--font-weight-medium);
            }
          }
        }
      }
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      flex-wrap: wrap;
      gap: 1rem;

      .footer-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .copyright {
          @include text-base();
          color: rgba(255, 255, 255, 0.6);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .location {
          @include text-base();
          color: rgba(255, 255, 255, 0.5);
          font-size: var(--font-size-xs);
          margin: 0;
        }
      }

      .back-to-top {
        @include text-base();
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 25px;
        padding: 0.5rem 1rem;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-medium);
        transition: all 0.3s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
        }

        .arrow-icon {
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-bold);
        }
      }
    }
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-wrapper {
    padding: 2rem 0 1rem;

    .footer-content {
      padding: 0 1rem;
    }

    .footer-main {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;

      .footer-info {
        order: 2;
      }

      .back-to-top {
        order: 1;
        align-self: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .footer-wrapper {
    .footer-main {
      .creator-section .creator-name {
        font-size: var(--font-size-2xl);
      }
    }

    .footer-bottom {
      text-align: center;
      align-items: center;

      .footer-info {
        align-items: center;
      }
    }
  }
}
</style>

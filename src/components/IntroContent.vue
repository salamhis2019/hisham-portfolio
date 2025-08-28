<template>
  <section id="intro-content" class="intro-content" aria-labelledby="intro-header">
    <!-- Animated Background Elements -->
    <div class="bg-decoration">
      <div class="floating-orb orb-1" />
      <div class="floating-orb orb-2" />
      <div class="floating-orb orb-3" />
    </div>

    <!-- Main Content Container -->
    <div class="content-wrapper">
      <!-- Profile Picture with Glassmorphism Frame -->
      <div class="profile-container">
        <div class="profile-glow" />
        <img
          class="profile-picture"
          src="@/assets/homepage/headshot.png"
          alt="Headshot of Hisham"
        />
        <div class="profile-ring" />
      </div>

      <!-- Text Content with Glass Card Effect -->
      <div class="intro-container">
        <header class="header-section">
          <div class="greeting-badge">
            <MaterialIcon name="waving_hand" size="sm" class="wave" />
            <span class="greeting-text">Hello, I'm</span>
          </div>

          <h1 class="section-header" role="heading">
            <span class="name-wrapper">
              <span class="name">{{ name }}</span>
            </span>
          </h1>
        </header>

        <p class="description">{{ description }}</p>

        <!-- Enhanced Social Links -->
        <div class="social-section">
          <p class="social-label">Connect with me</p>
          <ul class="links-container">
            <li v-for="link in socialLinks" :key="link.id" class="social-item">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.ariaLabel"
                :class="['social-link', link.id]"
              >
                <i :class="['fa', link.icon]" aria-hidden="true" />
                <span class="social-tooltip">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { SOCIAL_LINKS } from '@/constants/SocialLinks.const';
import MaterialIcon from '@/components/common/MaterialIcon.vue';

/** State */

const name = ref<string>('Hisham Salameh');
const description = ref<string>(
  'UI Engineer and UX Designer crafting exceptional digital experiences with modern web technologies',
);
const socialLinks = ref(SOCIAL_LINKS);

/** Lifecycle Hooks */

onMounted(() => {
  // Add entrance animations
  setTimeout(() => {
    const profileContainer = document.querySelector('.intro-content .profile-container');
    const greetingBadge = document.querySelector('.intro-content .greeting-badge');
    const sectionHeader = document.querySelector('.intro-content .section-header');
    const description = document.querySelector('.intro-content .description');
    const socialSection = document.querySelector('.intro-content .social-section');

    const elements = [profileContainer, greetingBadge, sectionHeader, description, socialSection];

    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('animate-in');
        }, index * 200);
      }
    });
  }, 100);
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.intro-content {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #0c0c0c 0%,
    #1a0033 25%,
    #2d1b69 50%,
    #1a0033 75%,
    #000000 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 20% 20%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 40% 60%, rgba(0, 136, 255, 0.08) 0%, transparent 50%);
    animation: backgroundShift 20s ease-in-out infinite alternate;
  }

  .bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;

    .floating-orb {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(255, 0, 128, 0.3), rgba(0, 136, 255, 0.3));
      filter: blur(40px);
      animation: floatOrb 15s ease-in-out infinite;

      &.orb-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        left: 10%;
        animation-delay: 0s;
      }

      &.orb-2 {
        width: 200px;
        height: 200px;
        top: 60%;
        right: 15%;
        animation-delay: -5s;
      }

      &.orb-3 {
        width: 150px;
        height: 150px;
        bottom: 20%;
        left: 60%;
        animation-delay: -10s;
      }
    }
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 6rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
      text-align: center;
    }
  }

  .profile-container {
    position: relative;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &.animate-in {
      transform: translateY(0);
      opacity: 1;
    }

    .profile-glow {
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: linear-gradient(45deg, #ff0080, #0088ff, #ff0080);
      border-radius: 50%;
      filter: blur(20px);
      opacity: 0.3;
      animation: pulseGlow 4s ease-in-out infinite;
    }

    .profile-picture {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
      position: relative;
      z-index: 3;
      border: 3px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1);

      @media (max-width: 768px) {
        width: 16rem;
        height: 16rem;
      }
    }

    .profile-ring {
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border: 2px solid transparent;
      border-radius: 50%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 0, 128, 0.5),
        transparent,
        rgba(0, 136, 255, 0.5)
      );
      background-size: 200% 200%;
      animation: rotateRing 8s linear infinite;
      z-index: 2;
    }
  }

  .intro-container {
    flex: 1;
    max-width: 600px;

    .header-section {
      margin-bottom: 1.5rem;

      .greeting-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;

        &.animate-in {
          transform: translateY(0);
          opacity: 1;
        }

        .wave {
          font-size: 1.25rem;
          animation: wave 2s ease-in-out infinite;
        }

        .greeting-text {
          @include text-greeting();
        }
      }

      .section-header {
        @include text-responsive(2.5rem, 6vw, 4rem);
        color: #ffffff;
        margin: 0;
        font-family: var(--font-code);
        line-height: var(--line-height-tight);
        transform: translateY(30px);
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;

        &.animate-in {
          transform: translateY(0);
          opacity: 1;
        }

        .name-wrapper {
          position: relative;
          display: inline-block;

          .name {
            @include text-name();
            position: relative;
            letter-spacing: var(--letter-spacing-wide);
          }
        }
      }
    }

    .description {
      @include text-responsive(1rem, 2vw, 1.2rem);
      @include text-base();
      color: rgba(255, 255, 255, 0.8);
      line-height: var(--line-height-relaxed);
      margin: 2rem 0;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;

      &.animate-in {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .social-section {
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;

      &.animate-in {
        transform: translateY(0);
        opacity: 1;
      }

      .social-label {
        @include text-label();
        color: rgba(255, 255, 255, 0.6);
        margin: 0 0 1rem 0;
      }

      .links-container {
        display: flex;
        gap: 1.5rem;
        padding: 0;
        margin: 0;
        list-style: none;

        .social-item {
          .social-link {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            text-decoration: none;
            overflow: hidden;

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
              );
              transition: left 0.5s ease;
            }

            &:hover {
              transform: translateY(-5px);
              border-color: rgba(255, 255, 255, 0.3);
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

              &::before {
                left: 100%;
              }

              .social-tooltip {
                opacity: 1;
                transform: translateY(0);
              }
            }

            &.linkedin:hover {
              background: rgba(0, 119, 181, 0.2);
              border-color: #0077b5;
            }

            &.github:hover {
              background: rgba(88, 166, 255, 0.2);
              border-color: #58a6ff;
            }

            i {
              font-size: 1.5rem;
              color: #ffffff;
              transition: all 0.3s ease;
              z-index: 2;
            }

            .social-tooltip {
              @include text-tooltip();
              position: absolute;
              bottom: -40px;
              left: 50%;
              transform: translateX(-50%) translateY(10px);
              background: rgba(0, 0, 0, 0.8);
              padding: 0.5rem 0.75rem;
              border-radius: 6px;
              opacity: 0;
              transition: all 0.3s ease;
              pointer-events: none;
              white-space: nowrap;

              &::before {
                content: '';
                position: absolute;
                top: -5px;
                left: 50%;
                transform: translateX(-50%);
                border: 5px solid transparent;
                border-bottom-color: rgba(0, 0, 0, 0.8);
              }
            }
          }
        }
      }
    }
  }
}

/* Animations */
@keyframes backgroundShift {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
  }
}

@keyframes floatOrb {
  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-30px) translateX(20px) scale(1.1);
  }
  66% {
    transform: translateY(20px) translateX(-20px) scale(0.9);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes rotateRing {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 200%;
  }
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .intro-content {
    .content-wrapper {
      padding: 1rem;
    }

    .intro-container {
      .social-section .links-container {
        justify-content: center;
      }
    }
  }
}
</style>

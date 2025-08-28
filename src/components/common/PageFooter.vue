<template>
  <footer class="footer-parent-container" role="contentinfo" aria-label="footer">
    <div class="footer-content">
      <div class="footer-info">
        <p class="created-by">
          Crafted by
          <span class="name"> Hisham Salameh</span>
        </p>

        <div class="footer-details">
          <p class="last-updated">Last Updated: October 2022</p>
          <p class="copyright">© 2022 All rights reserved</p>
        </div>
      </div>

      <div class="footer-tech">
        <p class="tech-stack">Built with Vue.js & TypeScript</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-parent-container {
  width: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ff00d9, #004cff, transparent);
  }

  .footer-content {
    max-width: 1350px;
    margin: 0 auto;
    padding: 3rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .footer-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .created-by {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.3rem;
    font-weight: 400;

    .heart {
      color: #ff0080;
      font-size: 1.2em;
      animation: heartbeat 2s ease-in-out infinite;
    }

    .name {
      font-family: 'Source Code Pro', monospace;
      font-size: 1.4rem;
      font-weight: 700;
      background: linear-gradient(135deg, #004cff, #ff00d9, #00ff88);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 3s ease-in-out infinite;
      text-shadow: 0 0 20px rgba(255, 0, 217, 0.3);
    }
  }

  .footer-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
    }
  }

  .last-updated,
  .copyright {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
    font-weight: 300;
  }

  .footer-tech {
    .tech-stack {
      margin: 0;
      font-family: 'Source Code Pro', monospace;
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
      font-weight: 400;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
    }
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

// Responsive design
@media (max-width: 768px) {
  .footer-parent-container {
    .footer-content {
      padding: 2rem 1rem 1.5rem;
      gap: 1.5rem;
    }

    .created-by {
      font-size: 1.1rem;

      .name {
        font-size: 1.2rem;
      }
    }

    .footer-details {
      gap: 0.8rem;
    }
  }
}
</style>

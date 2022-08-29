<template>
  <div
    class="loading-container"
  >
    <div class="loading-text-container">
      <div class="primary-text">
        <p>
          Hello, my name is <span class="name">Hisham.</span>
        </p>
      </div>
      <br>
      <div class="secondary-text">
        <p>Welcome to my portolio site!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 100%;
  margin-left: 10rem;
  .loading-text-container {
    .primary-text {
      width: 610px;
      p {
        opacity: 0;
        font-size: 2rem;
        color: #fff;
        font-family: 'Source Code Pro';
        overflow: hidden;
        border-right: .15em solid #ff0080;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
          typing 2s steps(30, end),
          blink-caret .75s step-end infinite;
        animation-delay: 1s;
        .name {
          font-weight: 700;
        }
      }
    }
    .secondary-text {
      min-width: 300px;
      p {
        opacity: 0;
        font-size: 2rem;
        color: white;
        font-family: 'Source Code Pro';
        overflow: hidden;
        border-right: .15em solid #ff0080;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
          typing 2s steps(30, end),
          blink-caret .75s step-end infinite;
        animation-delay: 3s;
      }
    }

    @keyframes typing {
      from {
        display: block;
        width: 0 
      }
      to { 
        display: block;
        opacity: 1;
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from, to { 
        display: block;
        opacity: 1;
        border-color: transparent 
      }
      50% { border-color: #ff0080 }
    }
  }
}
</style>
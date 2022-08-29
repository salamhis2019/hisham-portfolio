<template>
  <div
    class="loading-container"
  >
    <div class="loading-text-container">
      <h1>Hello, my name is <span class="name">Hisham!</span></h1>
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
    width: 630px;
    h1 {
      color: #fff;
      font-family: 'Source Code Pro';
      overflow: hidden;
      border-right: .15em solid #ff0080;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: .15em;
      animation: 
        typing 1.8s steps(30, end),
        blink-caret .75s step-end infinite;
      .name {
        font-size: 2.5rem;
        font-style: bold;
      }
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #ff0080 }
    }
  }
}
</style>
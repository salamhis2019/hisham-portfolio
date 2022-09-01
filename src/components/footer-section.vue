<template>
  <div class="footer-parent-container">
    <p class="created-by">Created By <span class="name">Hisham Salameh</span></p>
    <p class="last-updated">Last Updated: 08/29/2022</p>
  </div>
</template>

<style lang="scss" scoped>
.footer-parent-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  min-height: 150px;
  max-height: 400px;
  padding: 1.5rem 0;
  background: #333533;
  border-top: 3px solid white;
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 45px;
      margin: 0 1rem;
      padding: 1rem;
      font-size: 48px;
      border-radius: 50%;
      color: black;
      background: white;
      list-style-type: none;
    }
  }
  .contact {
    margin: 0;
    font-family: 'Source Sans Pro';
    color: white;
    font-size: 1.2rem;
  }
  .created-by {
    margin: 0;
    font-family: 'Source Sans Pro';
    color: rgba(255, 255, 255, 0.595);
    font-size: 1.2rem;
    .name {
      font-style: italic;
      font-size: 1.5rem;
      font-weight: 700;
      background: -webkit-linear-gradient(#0088ff, #ff00bb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .last-updated {
    margin: 0;
    font-family: 'Source Sans Pro';
    color: #ffffffa5;
  }
}
</style>
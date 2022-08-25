<template>
  <div class="nav">
    <div class="content-container">
      <h1>Hisham Salameh</h1>
      <nav class="nav-items-container">
        <li>About Me</li>
        <li>Work Experience</li>
        <li>Projects</li>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #333533;
  .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin: 0 2rem;
    color: white;
    h1 {
      font-family: "Source Code Pro";
      margin: 0;
    }
    .nav-items-container {
      display: flex;
      li {
        list-style-type: none;
        margin: 0 1rem;
      }
    }
  }
}
</style>

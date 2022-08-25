<template>
  <div class="nav">
    <div class="content-container">
      <h1>Hisham Salameh</h1>
      <nav class="nav-items-container">
        <li><a href="">About Me</a></li>
        <li><a href="">Work Experience</a></li>
        <li><a href="">Projects</a></li>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  background-color: #333533;
  position: fixed;
  .content-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin: 0 2rem;
    color: white;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      rgba(34, 152, 255, 0.793),
      rgba(255, 0, 128),
      rgba(34, 152, 255, 0.793)
    );
    border-image-slice: 1;
    h1 {
      font-family: "Source Code Pro";
      margin: 0;
    }
    .nav-items-container {
      display: flex;
      li {
        list-style-type: none;
        margin: 0 1rem;
        font-family: "Source Sans Pro";
        transition: 0.2s ease;
        a {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
        }
        :hover {
          color: rgba(255, 255, 255, 0.724);
        }
      }
    }
  }
}
</style>

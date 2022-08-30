<template>
  <div class="homepage-container">
    <div class="homepage-content">
      <div class="hero-content">
        <div class="home-description">
          <h2 class="section-header">
            Hisham Salameh<span class="period"> .</span>
          </h2>
          <p class="description">UI Engineer and UX Designer with a focus on creating modern web applications</p>
          <ul class="content-container">
            <li>
              <i class="fa fa-linkedin"></i>
            </li>
            <li>
              <i class="fa fa-github"></i>      
            </li>
          </ul>
        </div>
        <img
          class="my-image"
          src="@/assets/homepage/headshot.png"
          alt="about me image"
        >
      </div>
    </div>
    <hr>
  </div>
</template>

<style lang="scss" scoped>
.homepage-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #1c202b;
  .homepage-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5rem;
    width: 100%;
    .hero-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      width: 100%;
      .my-image {
        width: 20rem;
        background: linear-gradient(to right, #004cff7e, #ff00807d);
        border-radius: 50%;
        border-bottom: 3px dashed white;
        border-right: 3px dashed white;
        border-left: 3px dashed white;
        border-top: 3px solid white;
      }
      .home-description {
        max-width: 650px;
        font-family: 'Source Sans Pro';
        .section-header {
          font-family: 'Source Code Pro';
          font-size: 4rem;
          color: white;
        }
        .description {
          color: white;
          font-size: 2rem;
          font-weight: 600;
          background: -webkit-linear-gradient(#004cff, #ff0080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .content-container {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 0;
          list-style-type: none;
          .fa-linkedin {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #1c202b;
            background: white;
            font-size: 3rem;
            height: 69px;
            width: 69px;
            border-radius: 50%;
          }
          .fa-github {
            color: white;
            font-size: 5rem;
          }
        }
      }
    }
  }
  hr {
    border: 0;
    height: 2.5px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
    margin-bottom: 4rem;
  }
}
</style>

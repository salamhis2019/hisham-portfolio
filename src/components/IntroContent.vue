<template>
  <div class="homepage-container">
    <div class="homepage-content">
      <div class="hero-content">
        <img
          role="img"
          aria-label="Portfolio picture of Hisham"
          class="my-image"
          src="@/assets/homepage/headshot.png"
          alt="About me image"
        >
        <section class="home-description" role="contentinfo" aria-label="Name and Links">
          <header role="header">
            <h1 class="section-header" role="heading">
              Hisham Salameh<span class="period">.</span>
            </h1>
          </header>
          <p class="description">UI Engineer and UX Designer with a focus on creating modern web applications</p>
          <ul class="links-container">
            <li>
              <a href="https://www.linkedin.com/in/hishamsalameh"
                target="blank"
              >
                <i class="fa fa-linkedin" alt="linkedin-icon"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/salamhis2019"
                target="blank"
              >
                <i class="fa fa-github" alt="github-icon"></i>
              </a>
            </li>
          </ul>
        </section>
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
  background: #13141a;
  .homepage-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 4rem;
    width: 100%;
    .hero-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .my-image {
        width: 20rem;
        height: 20rem;
        background: linear-gradient(to right, #004cff7e, #ff00807d);
        border-radius: 100%;
        border-bottom: 4px solid white;
        border-right: 2px dashed white;
        border-left: 2px dashed white;
        box-shadow: 6px 3px 0px #004cff;
        object-fit: cover;
        object-position: top;
      }
      @media only screen and (max-width: 450px) {
        .my-image {
          width: 16rem;
        }
      }
      .home-description {
        max-width: 650px;
        text-align: center;
        font-family: 'Source Sans Pro';
        .section-header {
          font-family: 'Source Code Pro';
          font-size: 4rem;
          color: white;
          margin: 0;
          .period {
            font-family: 'Oswald';
            font-size: 6rem;
            background: -webkit-linear-gradient(#0088ff, #ff00bb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        @media only screen and (max-width: 450px) {
            .section-header {
              margin: 4rem 0;
              font-size: 4rem;
              .period {
                display: none;
              }
            }
            .description {
              margin: 1rem;
            }
            .links-container {
              margin-top: 3rem;
            }
          }
        .description {
          color: rgb(239, 239, 239);
          font-size: 2rem;
          font-weight: 600;
          text-shadow: 2px 2px 0px #ff0080c0;
        }
        .links-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding: 0;
          list-style-type: none;
          a {
            text-decoration: none;
            .fa-linkedin {
              display: flex;
              justify-content: center;
              align-items: center;
              color: #13141a;
              background: white;
              font-size: 3rem;
              height: 69px;
              width: 69px;
              border-radius: 50%;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
                background: -webkit-linear-gradient(#004cff, #ff0080);
              }
            }
            .fa-github {
              color: white;
              font-size: 5rem;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
                background: -webkit-linear-gradient(#004cff, #ff0080);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
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

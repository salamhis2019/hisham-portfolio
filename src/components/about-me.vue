<template>
  <div class="about-parent-container">
    <div class="about-container">
      <header class="about-header">
        <div class="header-container">
          <div class="header-content">
            <h1 class="section-header">
              About Me<span class="period"> .</span>
            </h1>
            <p class="description">Learn more about what technologies I have experience in and why I love to do what I do!</p>          
          </div>
        </div>
        <hr>
      </header>
      <div class="about-content-container">
        <section class="about-content-text" role="contentinfo" aria-label="personal bio">
          <h2 class="bio-header">My Bio</h2>
          <p class="about-item">
            I'm a <span class="key-word">Frontend Web Developer</span> building the easy to use and high performing web applications. Check out some of my work in the Projects section, and my previous experience in the work section!
          </p>
          <p class="about-item">
            I like to say that learning is my hobby and enjoy sharing what I have learned with my peers, so often times I interact with memebers on my team and everyone new ways of doing things. <span class="key-word">Web development</span> is so awesome because it has a intersection between problem solving, coding, and creating a tangible project and design which I love. I get to interact with several teams whether it be business, UX and accessibility, and the back end team to make sure that the proejct is on track to being successful.
          </p>
          <p class="about-item">
            I'm always one to <span class="key-word">say "yes" to opportunities</span> that can provide me a chance to learn something new, so please do not hesitate to reach out regarding and business or job opportunities! I attached my LinkedIn and GitHub on my home page, and my email in the footer :)
          </p>
        </section>
        <section class="skills-container" role="contentinfo" aria-label="skills">
          <h2 class="skills-header">Skills</h2>
          <ul class="row">
            <li
              v-for="skill in technicalSkills"
              :key="skill"
              class="skill"
            >
              {{ skill }}
            </li>
          </ul>
          <h2 class="skills-header">Soft Skills</h2>
          <ul class="row">
            <li
              v-for="skill in softSkills"
              :key="skill"
              class="skill soft"
            >
              {{ skill }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonLinks from '@/components/button-links.vue';

const technicalSkills = ['Web Development', 'UX/UI Development', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Vue.js', 'React.js', 'Jest', 'Testing', 'Git', 'GitHub', 'Agile', 'Code Review', 'Figma', 'PhotoShop', 'Figma', 'Node.js'];

const softSkills = ['Personable', 'Passionate', 'Ambitious', 'Collaboration', 'Accountable', 'Efficient', 'Outgoing', 'Self-aware', 'Self-learning', 'Accountability', 'Communication', 'Adaptable']
</script>

<style lang="scss" scoped>
.about-parent-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #13141a;
  .about-header {
    width: 900px;
    .header-container {
      display: flex;
      align-items: center;
      justify-content: left;
      height: 300px;
      width: 900px;
      padding-bottom: 2rem;
      .description {
        font-family: 'Source Sans Pro';
        font-size: 1.2rem;
        color: white;
      }
      .section-header {
        margin-bottom: 3rem;
        font-size: 4rem;
        font-family: 'Source Code Pro';
        color: white;
        .period {
          font-size: 5rem;
          font-family: 'Oswald';
          background: -webkit-linear-gradient(#004cff, #ff0080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
  @media only screen and (max-width: 450px) {
    .about-header {
      width: 100%;
      .header-container {
        width: 100%;
      }
    }
  }
  .about-content-container {
    width: 1000px;
    display: flex;
    gap: 2rem;
    margin-bottom: 4rem;
    .about-content-text {
      width: 40%;
      .bio-header {
        margin: 0;
        font-family: 'Source Sans Pro';
        font-size: 2rem;
        font-weight: 700;
        color: white;
      }
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: white;
      font-family: 'Source Sans Pro';
      font-size: 1.2rem;
      .about-item {
        font-weight: 300;
        margin: 0;
        .key-word {
          font-weight: 700;
        }
      }
    }
    .skills-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 60%;
      .skills-header {
        margin: 0;
        font-family: 'Source Sans Pro';
        font-size: 2rem;
        font-weight: 700;
        color: white;
      }
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 0;
        padding: 0;
        font-family: 'Source Code Pro';
        .skill {
          list-style-type: none;
          color: white;
          background: #323f61;
          margin: 0;
          padding: 0.5rem 1.5rem;
          border-radius: 5px;
        }
        .soft {
          background: #ff0080ba;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .about-content-container {
      display: block;
      width: 100%;
      .about-content-text {
        width: 100%;
        margin-bottom: 2rem
      }
      .skills-container {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 450px) {
  .about-parent-container {
    .about-container {
      padding: 1rem;
    }
  }
  
}
</style>

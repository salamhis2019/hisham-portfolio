import { shallowRef } from 'vue';
import ProjectsSection from "@/components/projects-section.vue";
import AboutMe from "@/components/about-me.vue";
import WorkExperience from "@/components/Work-section.vue";
import HomePage from "@/components/home-page.vue";
import type { NavItems } from '@/types/nav-items.types';

const NAV_ITEMS: NavItems[] = [
  {
    name: 'home',
    displayText: 'Home',
  },
  {
    name: 'projects',
    displayText: 'Projects',
  },
  {
    name: 'work-experience',
    displayText: 'Work Experience',
  },
  {
    name: 'about-me',
    displayText: 'About Me',
  }
]

const NAV_COMPONENTS = {
  "home": {
    "home": shallowRef(HomePage),
  },
  "projects": {
    "projects": shallowRef(ProjectsSection)
  },
  "work-experience": {
    "work-experience": shallowRef(WorkExperience),
  },
  "about-me": {
    "about-me": shallowRef(AboutMe)
  }
}

export {
  NAV_ITEMS,
  NAV_COMPONENTS
}

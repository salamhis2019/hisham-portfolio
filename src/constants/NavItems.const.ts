import { shallowRef } from 'vue';
import ProjectsSection from "@/components/ProjectsSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import WorkExperience from "@/components/Work-section.vue";
import IntroContent from "@/components/IntroContent.vue";
import type { NavItems } from '@/types/nav-items.types';

const NAV_ITEMS: NavItems[] = [
  {
    name: 'intro-content',
    displayText: 'Home',
  },
  {
    name: 'work-experience',
    displayText: 'Work Experience',
  },
  {
    name: 'projects',
    displayText: 'Projects',
  },
  {
    name: 'about-me',
    displayText: 'About Me',
  }
]

const NAV_COMPONENTS = {
  "home": {
    "home": shallowRef(IntroContent),
  },
  "projects": {
    "projects": shallowRef(ProjectsSection)
  },
  "work-experience": {
    "work-experience": shallowRef(WorkExperience),
  },
  "about-me": {
    "about-me": shallowRef(AboutMeSection)
  }
}

export {
  NAV_ITEMS,
  NAV_COMPONENTS
}

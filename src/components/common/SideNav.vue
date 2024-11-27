<template>
  <div class="side-nav">
    <nav
      role="navigation"
      aria-label="Nav bar"
      class="nav-items-container"
      :class="showMenu ? 'open-menu' : 'closed-menu'"
    >

      <router-link
        v-for="item in items"
        :to="`/${item.name}`"
        :key="item.name"
        role="sidenav-link"
        class="nav-item"
        :class="{'active': route.params.currentPage === item.name}"
        @click.prevent="scrollToSection(item.name)"
      >

        <li>{{ item.displayText }}</li>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { useRoute } from "vue-router";
import type { NavItems } from "@/types/nav-items.types";

/** Props */

interface Props {
  items: NavItems[]
}

defineProps<Props>();

/** Router */

const route = useRoute();

/** State */

const showMenu = ref(false);

/** Methods */

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style lang="scss" scoped>
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  min-height: 100%;
  background-color: #1b1f22;

  .menu-button {
    display: none;
  }

  .nav-items-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem 1rem;

    .nav-item {
      padding: 0.5rem 0;
      border-radius: 12px;
      text-decoration: none;
      color: var(--color-white);
      font-size: 1rem;
      font-weight: 600;
      transition: 0.2s ease;

      li {
        list-style-type: none;
        margin: 0 1rem;
        font-family: "Source Sans Pro";
        transition: 0.2s ease;
      }

      :hover {
        color: rgba(255, 255, 255, 0.75);
      }

      &:focus {
        border: var(--color-white);
        border-radius: 12px;
        outline: 0;
      }
    }

    .active {
      background-color: var(--interactive-blue);
    }
  }
}
</style>

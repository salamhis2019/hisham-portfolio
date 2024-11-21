<template>
  <div class="side-nav">

    <Transition>
      <i
        v-if="!showMenu"
        class="material-icons menu-button"
        style="font-size:36px"
        @click="renderMenu"
      >
        menu
      </i>
      <i
        v-else
        class="material-icons menu-button" 
        style="font-size:36px"
        role="button"
        @click="renderMenu"
      >
        close
      </i>
    </Transition>

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

function renderMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss" scoped>
.side-nav {
  width: 300px;
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

@media only screen and (max-width: 450px) {
  .nav {
    .content-container {
      display: block;
      flex-direction: column;
      justify-content: left;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 1rem 0;
      cursor: pointer;
      .menu-button {
        display: block;
        padding-left: 1rem;
      }
      .closed-menu {
        display: none;
      }
      .open-menu {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-bottom: 2rem;
      }
      .nav-items-container {
        transition: 0.3s ease;
      }
    }
  }
}
.v-leave-from {
  display: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s ease-in;
}
</style>

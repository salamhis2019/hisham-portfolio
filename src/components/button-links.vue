<template>
  <a 
    :href="link"
    target="blank"
    class="button-link"
  >
    {{ text }}
    <i class="fa fa-external-link"></i>
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps(['text', 'link'])
</script>

<style lang="scss" scoped>
.button-link {
  padding: 0.5rem 1rem;
  font-size: 24px;
  font-family: 'Source Code Pro';
  text-decoration: none;
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.123);
  box-shadow: 2px 2px 0px white;
  transition: 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.27);
    text-decoration: underline;
  }
  .fa-external-link {
    font-size: 24px;
  }
}

@media only screen and (max-width: 450px) {
  .button-link {
    font-size: 18px;
  }
}
</style>
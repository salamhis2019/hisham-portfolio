<template>
  <a 
    :href="link"
    target="blank"
  >
    {{ text }}
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps(['text', 'link'])
</script>

<style lang="scss" scoped></style>
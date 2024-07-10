<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <div></div>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>

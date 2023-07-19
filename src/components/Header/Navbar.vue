<script setup lang="ts">
import Navigation from "./Navigation.vue";
</script>
<template>
  <nav>
    <a href="/" aria-label="Go to homepage header">
      <img src="/icons/logo-icon.svg" aria-hidden="true" />
    </a>
    <Navigation />
  </nav>
</template>
<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}
</style>

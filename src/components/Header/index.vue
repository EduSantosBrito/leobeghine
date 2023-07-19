<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Hero from "./Hero.vue";
</script>
<template>
  <header>
    <Navbar />
    <Hero />
  </header>
</template>
<style scoped lang="scss">
header {
  height: 80vh;
  background-color: var(--neutral-white);
  padding-inline: 5%;
  padding-block: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
</style>

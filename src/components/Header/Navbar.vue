<script setup lang="ts">
import Navigation from "./Navigation.vue";
</script>
<template>
  <div>
    <slot />
  </div>
</template>
<style scoped lang="scss">
div {
  background-color: var(--neutral-white);
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
}
</style>

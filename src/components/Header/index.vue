<script setup lang="ts"></script>
<template>
  <header>
    <slot />
  </header>
</template>
<style scoped lang="scss">
header {
  height: 80vh;
  background-color: var(--neutral-white);
  padding-block: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 70vh;
  }
  @media screen and (min-width: 1366px) {
    height: 80vh;
  }
}
</style>

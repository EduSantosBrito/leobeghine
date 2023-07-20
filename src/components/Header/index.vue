<script setup lang="ts"></script>
<template>
  <header>
    <slot />
  </header>
</template>
<style scoped lang="scss">
header {
  background-color: var(--neutral-white);
  padding-bottom: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
</style>

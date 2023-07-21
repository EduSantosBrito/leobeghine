<script setup lang="ts"></script>
<template>
  <header>
    <slot />
  </header>
</template>
<style scoped lang="scss">
header {
  padding-bottom: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-inline: auto;
  width: min(100%, 1440px);
}
</style>

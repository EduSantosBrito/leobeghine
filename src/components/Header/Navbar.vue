<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const withBorder = ref(false);

const scrollListener = () => {
  if (!withBorder.value && window.scrollY > 44) {
    withBorder.value = true;
  }
  if (withBorder.value && window.scrollY <= 44) {
    withBorder.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollListener);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollListener);
});
</script>
<template>
  <div :class="`fixed-container ${withBorder ? 'with-border' : ''}`">
    <div class="internal-navbar">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.internal-navbar {
  position: fixed;
  z-index: 25;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  padding-top: 16px;
  width: min(100%, 1440px);
}

.fixed-container {
  position: fixed;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
  z-index: 25;
  transition: background-color 300ms ease-in-out;
  background-color: var(--neutral-white);
  &.with-border {
    background-color: white;
    filter: drop-shadow(4px 6px 10px rgba(11, 14, 37, 0.06));
  }
}
</style>

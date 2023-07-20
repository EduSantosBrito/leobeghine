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
  <div :class="withBorder ? 'with-border' : ''">
    <slot />
  </div>
</template>
<style scoped lang="scss">
div {
  background-color: var(--neutral-white);
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 24px;
  padding-top: 16px;
  &.with-border {
    border-bottom: 1px solid #e7e7e7;
  }
}
</style>

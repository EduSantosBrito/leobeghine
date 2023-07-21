<script setup lang="ts">
type Props = {
  variant: "neutral-white" | "transparent" | "white";
};

const props = defineProps<Props>();
</script>
<template>
  <div :class="`container ${props.variant}`">
    <slot />
  </div>
</template>
<style lang="scss">
.container {
  width: 100%;
  height: auto;
  &.neutral-white {
    background-color: var(--neutral-white);
  }

  &.white {
    background-color: white;
  }

  &.transparent {
    background-color: initial;
  }
}
</style>

<script setup lang="ts">
type Props = {
  variant: "neutral-white" | "transparent" | "white";
};

const props = defineProps<Props>();
</script>
<template>
  <section :class="`container ${props.variant}`">
    <slot />
  </section>
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

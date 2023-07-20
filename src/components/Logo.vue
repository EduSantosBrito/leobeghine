<template>
  <a href="/" aria-label="Go to homepage header">
    <img
      width="158"
      height="37"
      src="/icons/logo-icon.svg"
      aria-hidden="true"
    />
  </a>
</template>
<style scoped lang="scss">
a {
  margin-left: 5%;
  min-width: 44px;
  min-height: 44px;
  border-radius: 4px;
  &:focus {
    outline: 1px solid var(--neutral-dark);
    outline-offset: 4px;
  }
}
</style>

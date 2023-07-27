<script setup lang="ts">
type Props = {
  title: string;
  description: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="feature-container">
    <slot />
    <h3 class="feature-title">{{ props.title }}</h3>
    <p class="feature-description">{{ props.description }}</p>
  </div>
</template>

<style lang="scss">
.feature-container {
  width: 100%;
  max-width: 562px;
  height: 224px;
  border-radius: 10px;
  background: var(--neutral-white);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 32px;
  padding-inline: 24px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "icon title"
      "icon description";
    grid-template-columns: 60px 1fr;
    column-gap: 20px;
    height: 147px;
  }
}
.feature-img {
  width: 46px;
  height: 46px;
  grid-area: icon;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
}
.feature-title {
  grid-area: title;
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 166.667% */
}
.feature-description {
  grid-area: description;
  color: var(--neutral-gray);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 1.12px;
}
</style>

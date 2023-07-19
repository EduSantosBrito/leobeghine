<script setup lang="ts">
import type { Asset } from "contentful";
import { contentfulClient } from "../lib/contentful";

const heroEntries = await contentfulClient.getEntries({
  content_type: "flowerImage",
});
const image = heroEntries.items[0].fields.image as Asset;
const imageUrl = `${image.fields.file?.url as string}?fm=webp&w=170&h=170&f=center`;
</script>

<template>
  <div>
    <img width="170" height="170" class="unmasked-image" :src="imageUrl" />
    <img width="170" height="170" class="masked-image" :src="imageUrl" />
    <svg
      width="0"
      height="0"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clipPath">
          <path d="M34.0879 16.8666C34.0879 7.65701 41.5537 0.191162 50.7633 0.191162V0.191162C59.9729 0.191162 67.4387 7.65701 67.4387 16.8666V16.8666C67.4387 26.0762 59.9729 33.542 50.7633 33.542H34.0879V16.8666Z" fill="#C267E4"/>
          <path d="M34.0879 50.1337C34.0879 59.3432 41.5537 66.8091 50.7633 66.8091V66.8091C59.9729 66.8091 67.4387 59.3432 67.4387 50.1337V50.1337C67.4387 40.9241 59.9729 33.4582 50.7633 33.4582H34.0879V50.1337Z" fill="#67E46C"/>
          <path d="M34.1719 16.8666C34.1719 7.65701 26.706 0.191162 17.4965 0.191162V0.191162C8.28687 0.191162 0.82103 7.65701 0.82103 16.8666V16.8666C0.82103 26.0762 8.28687 33.542 17.4965 33.542H34.1719V16.8666Z" fill="#D94E26"/>
          <path d="M34.1719 50.1337C34.1719 59.3432 26.706 66.8091 17.4965 66.8091V66.8091C8.28687 66.8091 0.82103 59.3432 0.82103 50.1337V50.1337C0.82103 40.9241 8.28687 33.4582 17.4965 33.4582H34.1719V50.1337Z" fill="#3A85DC"/>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<style scoped lang="scss">
div {
  position: relative;
}
img {
  object-fit: cover;
  width: 67px;
  height: 67px;
  border-radius: 4px;

  &.masked-image {
    clip-path: url(#clipPath);
    &:hover ~ .unmasked-image {
      opacity: 1;
    }
  }
  &.unmasked-image {
    width: 67px;
    z-index: 10;
    position: absolute;
    transition: opacity 1s;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
}
svg:hover {
  opacity: 0;
}
</style>
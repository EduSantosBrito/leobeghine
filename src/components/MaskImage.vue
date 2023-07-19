<script setup lang="ts">
import type { Asset, AssetDetails } from "contentful";
import { contentfulClient } from "../lib/contentful";

const heroEntries = await contentfulClient.getEntries({
  content_type: "flowerImage",
});
const image = heroEntries.items[0].fields.image as Asset;
</script>

<template>
  <div>
    <img class="unmasked-image" :src="(image.fields.file?.url as string)" />
    <img class="masked-image" :src="(image.fields.file?.url as string)" />
    <svg
      width="0"
      height="0"
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clipPath">
          <path
            d="M84.4771 42.3451C84.4771 18.9585 103.436 0 126.822 0C150.209 0 169.167 18.9585 169.167 42.3451C169.167 65.7316 150.209 84.6902 126.822 84.6902H84.4771V42.3451Z"
          />
          <path
            d="M84.4771 126.823C84.4771 150.21 103.436 169.168 126.822 169.168C150.209 169.168 169.167 150.21 169.167 126.823C169.167 103.436 150.209 84.4779 126.822 84.4779H84.4771V126.823Z"
          />
          <path
            d="M84.6902 42.3451C84.6902 18.9585 65.7316 0 42.3451 0C18.9585 0 0 18.9585 0 42.3451C0 65.7316 18.9585 84.6902 42.3451 84.6902H84.6902V42.3451Z"
          />
          <path
            d="M84.6902 126.823C84.6902 150.21 65.7316 169.168 42.3451 169.168C18.9585 169.168 0 150.21 0 126.823C0 103.436 18.9585 84.4779 42.3451 84.4779H84.6902V126.823Z"
          />
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
  width: 170px;
  height: 170px;
  border-radius: 4px;

  &.masked-image {
    clip-path: url(#clipPath);
    &:hover ~ .unmasked-image {
      opacity: 1;
    }
  }
  &.unmasked-image {
    width: 170px;
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
../lib/contentful
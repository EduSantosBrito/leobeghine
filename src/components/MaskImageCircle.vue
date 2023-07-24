<script setup lang="ts">
import type { Asset } from "contentful";
import { contentfulClient } from "../lib/contentful";

const heroEntries = await contentfulClient.getEntries({
  content_type: "roundedImage",
});
const image = heroEntries.items[0].fields.image as Asset;
const baseImageUrl = image.fields.file?.url as string;
const mobileUrl = `${baseImageUrl}?fm=webp&w=134&h=134&f=center`;
const tabletUrl = `${baseImageUrl}?fm=webp&w=200&h=200&f=center`;
const desktopUrl = `${baseImageUrl}?fm=webp&w=340&h=340&f=center`;
const srcSet = `${mobileUrl} 360w, ${tabletUrl} 768w, ${desktopUrl} 1366w`;
const imageDescription = heroEntries.items[0].fields.description as string;
</script>

<template>
  <div>
    <img
      :alt="imageDescription"
      aria-disabled="true"
      width="170"
      height="170"
      class="unmasked-image"
      :src="mobileUrl"
      :srcset="srcSet"
    />
    <img
      :alt="imageDescription"
      aria-disabled="true"
      width="170"
      height="170"
      class="masked-image"
      :src="mobileUrl"
      :srcset="srcSet"
    />
    <svg
      aria-disabled="true"
      width="0"
      height="0"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clipPathCircleMobile">
          <path
            d="M0 33.5C0 14.9985 14.9985 0 33.5 0V0C52.0015 0 67 14.9985 67 33.5V33.5C67 52.0015 52.0015 67 33.5 67H0V33.5Z"
          />
        </clipPath>
        <clipPath id="clipPathCircleTablet">
          <path
            d="M0 50C0 22.3858 22.3858 0 50 0V0C77.6142 0 100 22.3858 100 50V50C100 77.6142 77.6142 100 50 100H0V50Z"
          />
        </clipPath>
        <clipPath id="clipPathCircleDesktop">
          <path
            d="M0 84.5C0 37.8319 38.3319 0 85 0V0C131.668 0 170 38.3319 170 85V85C170 131.668 132.168 170 85.5 170H0V84.5Z"
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
  width: 67px;
  height: 67px;
  border-radius: 4px;

  &.masked-image {
    border-radius: 50%;
    &:hover ~ .unmasked-image {
      opacity: 1;
    }
  }
  &.unmasked-image {
    opacity: 0;
    z-index: 10;
    position: absolute;
    transition: opacity 1s;
    clip-path: url(#clipPathCircleMobile);
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    &.unmasked-image {
      width: 100px;
      clip-path: url(#clipPathCircleTablet);
    }
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
    &.unmasked-image {
      width: 170px;
      clip-path: url(#clipPathCircleDesktop);
    }
  }
}
svg:hover {
  opacity: 0;
}
</style>

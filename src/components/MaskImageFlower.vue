<script setup lang="ts">
import type { Asset } from "contentful";
import { contentfulClient } from "../lib/contentful";

const heroEntries = await contentfulClient.getEntries({
  content_type: "flowerImage",
});
const image = heroEntries.items[0].fields.image as Asset;
const imageUrl = `${
  image.fields.file?.url as string
}?fm=webp&w=680&h=680&f=center`;
const imageDescription = heroEntries.items[0].fields.description as string;
</script>

<template>
  <div>
    <img
      :aria-label="imageDescription"
      aria-disabled="true"
      width="170"
      height="170"
      class="unmasked-image"
      :src="imageUrl"
    />
    <img
      :aria-label="imageDescription"
      aria-disabled="true"
      width="170"
      height="170"
      class="masked-image"
      :src="imageUrl"
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
        <clipPath id="clipPathFlowerMobile">
          <path
            d="M34.0879 16.8666C34.0879 7.65701 41.5537 0.191162 50.7633 0.191162V0.191162C59.9729 0.191162 67.4387 7.65701 67.4387 16.8666V16.8666C67.4387 26.0762 59.9729 33.542 50.7633 33.542H34.0879V16.8666Z"
            fill="#C267E4"
          />
          <path
            d="M34.0879 50.1337C34.0879 59.3432 41.5537 66.8091 50.7633 66.8091V66.8091C59.9729 66.8091 67.4387 59.3432 67.4387 50.1337V50.1337C67.4387 40.9241 59.9729 33.4582 50.7633 33.4582H34.0879V50.1337Z"
            fill="#67E46C"
          />
          <path
            d="M34.1719 16.8666C34.1719 7.65701 26.706 0.191162 17.4965 0.191162V0.191162C8.28687 0.191162 0.82103 7.65701 0.82103 16.8666V16.8666C0.82103 26.0762 8.28687 33.542 17.4965 33.542H34.1719V16.8666Z"
            fill="#D94E26"
          />
          <path
            d="M34.1719 50.1337C34.1719 59.3432 26.706 66.8091 17.4965 66.8091V66.8091C8.28687 66.8091 0.82103 59.3432 0.82103 50.1337V50.1337C0.82103 40.9241 8.28687 33.4582 17.4965 33.4582H34.1719V50.1337Z"
            fill="#3A85DC"
          />
        </clipPath>
        <clipPath id="clipPathFlowerTablet">
          <path
            d="M49.9375 25.0315C49.9375 11.207 61.1445 0 74.969 0V0C88.7935 0 100 11.2069 100 25.0314V25.0314C100 38.8558 88.7935 50.0628 74.9691 50.0628H49.9375V25.0315Z"
          />
          <path
            d="M49.9375 74.9685C49.9375 88.793 61.1445 100 74.969 100V100C88.7935 100 100 88.7931 100 74.9686V74.9686C100 61.1442 88.7935 49.9372 74.9691 49.9372H49.9375V74.9685Z"
          />
          <path
            d="M50.0625 25.0315C50.0625 11.207 38.8555 0 25.031 0V0C11.2065 0 -0.000473022 11.2069 -0.000473022 25.0314V25.0314C-0.000473022 38.8558 11.2065 50.0628 25.0309 50.0628H50.0625V25.0315Z"
          />
          <path
            d="M50.0625 74.9685C50.0625 88.793 38.8555 100 25.031 100V100C11.2065 100 -0.000473022 88.7931 -0.000473022 74.9686V74.9686C-0.000473022 61.1442 11.2065 49.9372 25.0309 49.9372H50.0625V74.9685Z"
          />
        </clipPath>
        <clipPath id="clipPathFlowerDesktop">
          <path
            d="M84.8906 42.3984C84.8906 18.9824 104.028 0 127.444 0V0C150.86 0 169.998 19.1375 169.998 42.5535V42.5535C169.998 65.9695 151.015 85.107 127.599 85.107H84.8906V42.3984Z"
            fill="#C267E4"
          />
          <path
            d="M84.8906 127.602C84.8906 151.018 104.028 170.001 127.444 170.001V170.001C150.86 170.001 169.998 150.863 169.998 127.447V127.447C169.998 104.031 151.015 84.8937 127.599 84.8937H84.8906V127.602Z"
            fill="#67E46C"
          />
          <path
            d="M85.1055 42.3984C85.1055 18.9824 65.9679 0 42.5519 0V0C19.136 0 -0.00158691 19.1375 -0.00158691 42.5535V42.5535C-0.00158691 65.9695 18.9808 85.107 42.3968 85.107H85.1055V42.3984Z"
            fill="#D94E26"
          />
          <path
            d="M85.1055 127.602C85.1055 151.018 65.9679 170.001 42.5519 170.001V170.001C19.136 170.001 -0.00158691 150.863 -0.00158691 127.447V127.447C-0.00158691 104.031 18.9808 84.8937 42.3968 84.8937H85.1055V127.602Z"
            fill="#3A85DC"
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
    clip-path: url(#clipPathFlowerMobile);
    &:hover ~ .unmasked-image {
      opacity: 1;
    }
  }
  &.unmasked-image {
    z-index: 10;
    position: absolute;
    transition: opacity 1s;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
    &.masked-image {
      clip-path: url(#clipPathFlowerTablet);
    }
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
    &.masked-image {
      clip-path: url(#clipPathFlowerDesktop);
    }
  }
}
svg:hover {
  opacity: 0;
}
</style>

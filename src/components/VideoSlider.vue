<script setup lang="ts">
import { ref } from "vue";
import type { TestimonialVideo } from "../lib/contentful";
import type { Entry, EntrySkeletonType } from "contentful";

type Props = {
  items: Entry<EntrySkeletonType, undefined, string>[];
};
const STATES = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};
const transitioningIndex = ref<{ opening: number; closing: number } | null>(
  null
);
const activeVideo = ref(0);
const focused = ref<number | null>(null);
const playVideo = ref(false);
const videoTag = ref<HTMLVideoElement[] | null>(null);

const onClick = (index: number, activeIndex: number) => {
  if (index === activeIndex && playVideo.value) {
    const currentVideo = videoTag.value?.[index];
    if (currentVideo) {
      currentVideo.pause();
    }
    return;
  }
  transitioningIndex.value = {
    opening: index,
    closing: activeIndex,
  };
  setTimeout(() => {
    activeVideo.value = index;
    transitioningIndex.value = null;
    playVideo.value = true;
    const currentVideo = videoTag.value?.[index];
    if (currentVideo) {
      currentVideo.play();
      currentVideo.muted = false;
      currentVideo.focus();
    }
  }, 300);
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.code === "Escape") {
    playVideo.value = false;
    const currentVideo = videoTag.value?.[activeVideo.value];
    if (currentVideo) {
      currentVideo.currentTime = 0;
    }
  }
};

const getClass = (index: number) => {
  if (transitioningIndex.value?.opening === index) {
    return STATES.ACTIVE;
  }
  if (transitioningIndex.value?.closing === index) {
    return STATES.INACTIVE;
  }
  if (activeVideo.value === index) {
    return STATES.ACTIVE;
  }
  return STATES.INACTIVE;
};
const props = defineProps<Props>();
</script>

<template>
  <section
    :aria-label="`Lista de ${props.items.length} vídeos com depoimentos dos alunos`"
  >
    <template v-for="(item, index) in props.items" :key="index">
      <div
        :class="`item ${getClass(index)} ${
          focused === index && activeVideo !== index ? 'focused' : ''
        }`"
      >
        <button
          type="button"
          :class="activeVideo === index ? (playVideo ? 'playing' : 'idle') : ''"
          @click="() => onClick(index, activeVideo)"
          @focusin="focused = index"
          @focusout="focused = index"
          @keydown="(event) => onKeydown(event)"
        >
          <img
            tabindex="-1"
            :src="((item.fields as TestimonialVideo).thumbnail.fields.file?.url as string)"
            :alt="`Iniciar vídeo ${(item.fields as TestimonialVideo).title}`"
          />
        </button>
        <video
          ref="videoTag"
          :aria-label="(item.fields as TestimonialVideo).description"
          :class="activeVideo === index && playVideo ? 'playing' : 'idle'"
        >
          <source
            :src="((item.fields as TestimonialVideo).video.fields.file?.url as string)"
            :type="((item.fields as TestimonialVideo).video.fields.file?.contentType as string)"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </template>
  </section>
</template>

<style scoped lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
@keyframes fadeInFull {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
section {
  display: flex;
  gap: 16px;
}

button {
  position: absolute;
  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: 1px solid #5748cf;
    outline-offset: 4px;
    border-radius: 10px;
  }

  &.playing {
    z-index: -1;
  }

  &.idle {
    &::before {
      content: "";
      display: block;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      background-color: #d9d9d9;
      border-radius: 50%;
    }
    &::after {
      content: url("/icons/play-icon.svg");
      display: block;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -40%);
    }
    &:hover {
      &::after {
        animation: fadeInFull 300ms ease-in forwards;
      }
      &::before {
        animation: fadeIn 300ms ease-in-out forwards;
      }
    }
  }
}

.item {
  position: relative;
  width: 286px;
  height: 508px;
  transition: width 300ms ease-in-out, filter 300ms ease-in-out;
  &.inactive {
    width: 90px;
    filter: grayscale(95%);

    &:hover,
    &.focused {
      width: 150px;
      filter: none;
    }
  }
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: width 300ms ease-in-out, filter 300ms ease-in-out;

  &.idle {
    visibility: hidden;
  }
}
</style>

<script setup lang="ts">
import { ref } from "vue";

type Video = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
};
type Props = {
  items: Video[];
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
const videoIframe = ref<HTMLIFrameElement[] | null>(null);

const onClick = (index: number, activeIndex: number) => {
  transitioningIndex.value = {
    opening: index,
    closing: activeIndex,
  };
  setTimeout(() => {
    activeVideo.value = index;
    transitioningIndex.value = null;
    playVideo.value = true;
  }, 300);
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
    <template v-for="(item, index) in props.items">
      <div
        :class="`item ${getClass(index)} ${
          focused === index && activeVideo !== index ? 'focused' : ''
        }`"
      >
        <button
          :class="activeVideo === index ? (playVideo ? 'playing' : 'idle') : ''"
          @click="() => onClick(index, activeVideo)"
          type="button"
          @focusin="focused = index"
          @focusout="focused = index"
        >
          <img
            tabindex="-1"
            :src="item.thumbnail"
            :alt="`Iniciar vídeo ${item.title}`"
          />
        </button>

        <iframe
          ref="videoIframe"
          :tabindex="playVideo && activeVideo === index ? '0' : '-1'"
          :aria-label="item.description"
          :id="item.id"
          :src="`https://www.youtube.com/embed/${item.id}?autoplay=${
            playVideo && activeVideo === index ? '1' : '0'
          }&mute=0&loop=0&showinfo=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&playlist=${
            item.id
          }`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </template>
  </section>
</template>

<style scoped>
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
}

button.playing {
  z-index: -1;
}

button.idle::before {
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

button.idle::after {
  content: url("/play-icon.svg");
  display: block;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -40%);
}

button.idle:hover::after {
  animation: fadeInFull 300ms ease-in forwards;
}
button.idle:hover::before {
  animation: fadeIn 300ms ease-in-out forwards;
}

.item.inactive {
  width: 90px;
  filter: grayscale();
}

.item.inactive:hover,
.item.inactive.focused {
  width: 150px;
  filter: none;
}

button:focus {
  outline: 1px solid #5748cf;
  outline-offset: 4px;
  border-radius: 10px;
}

.item {
  position: relative;
  width: 286px;
  height: 508px;
  transition: width 300ms ease-in-out, filter 300ms ease-in-out;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>

<script setup lang="ts">
import type { Asset } from "contentful";
import { hexToRGB } from "../utils/hexToRGB";
import { onMounted, ref } from "vue";

type Color = {
  value: string;
};

export type Course = {
  title: string;
  description: string;
  duration: string;
  cost: number;
  levels: string[];
  videoQuantity: number;
  color: Color;
  image: Asset;
  url: string;
};

type Props = {
  data: Course;
  id: string;
};

const isMobile = ref<boolean>(false);
const props = defineProps<Props>();
const baseUrl = props.data.image.fields.file?.url as string;
const mobileUrl = `${baseUrl}?fm=webp&w=300&h=290`;
const desktopUrl = `${baseUrl}?fm=webp&w=500&h=483`;
const srcSet = `${mobileUrl} 360w, ${desktopUrl} 1366w`;
const imageTitle = props.data.image.fields.title as string;
const cost = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})
  .format(props.data.cost)
  .slice(2);

const open = ref<boolean>(false);
onMounted(() => {
  if (screen.width < 768) {
    isMobile.value = true;
  }
});
const handleHoverIn = () => {
  if (isMobile.value) {
    return;
  }
  if (open.value) {
    return;
  }
  open.value = true;
};

const handleHoverOut = () => {
  if (isMobile.value) {
    return;
  }
  if (!open.value) {
    return;
  }
  open.value = false;
};
</script>
<template>
  <article @mouseenter="handleHoverIn" @mouseleave="handleHoverOut">
    <header :style="{ backgroundColor: props.data.color.value }">
      <img
        :alt="imageTitle"
        class="course-image"
        :src="mobileUrl"
        :srcset="srcSet"
      />
    </header>
    <main
      :id="`content-${props.id}`"
      :aria-expanded="open"
      :class="open ? 'opened' : ''"
    >
      <div :class="`course-chips ${open ? 'course-chips--opened' : ''}`">
        <p
          v-for="chip of props.data.levels"
          :key="chip"
          class="course-chip"
          :style="{
            color: props.data.color.value,
            backgroundColor: hexToRGB(props.data.color.value, 0.2),
          }"
        >
          {{ chip }}
        </p>
      </div>
      <button
        :aria-controls="`content-${props.id}`"
        :class="`expand-button ${open ? 'opened' : ''}`"
        type="button"
        @click="open = !open"
      >
        <span>Mostrar {{ open ? "menos" : "mais" }}</span>
      </button>
      <h3 :class="`course-title ${open ? 'course-title--opened' : ''}`">
        {{ props.data.title }}
      </h3>
      <p :class="`course-subtitle ${open ? 'course-subtitle--opened' : ''}`">
        {{ props.data.description }}
      </p>
      <div v-if="open" class="inner-data">
        <div class="course-info">
          <div class="course-info--item">
            <img
              alt="Decorative icon: video play symbol"
              aria-hidden="true"
              src="/icons/small-play-icon.svg"
            />
            <p>{{ props.data.videoQuantity }} vídeos</p>
          </div>
          <div class="course-info--item">
            <img
              alt="Decorative icon: clock symbol"
              aria-hidden="true"
              src="/icons/time-icon.svg"
            />
            <p>{{ props.data.duration }}</p>
          </div>
        </div>
        <hr />
        <div class="course-cta">
          <p class="course-cost"><span>R$</span>{{ cost }}</p>
          <a class="course-link" :href="props.data.url">
            <span>Comprar curso</span>
          </a>
        </div>
      </div>
    </main>
  </article>
</template>
<style scoped lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
article {
  margin-block: 50px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 13px;
  width: 300px;
  height: 400px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  outline: none;
  @media screen and (min-width: 1366px) {
    width: 383px;
    height: 452px;
  }
}
header {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 300px;
  z-index: 0;
  border-radius: 18px 18px 10px 10px;
  box-shadow: 12px 0px 30px -3px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 1366px) {
    height: 400px;
  }
}

.course-image {
  position: absolute;
  z-index: 1;
  top: -100px;
  width: 300px;
  @media screen and (min-width: 1366px) {
    width: 500px;
    top: -90px;
  }
}

main {
  position: relative;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  display: flex;
  width: 100%;
  padding-block: 21px 36px;
  padding-inline: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  transition: height 300ms ease-in-out;
  &.opened {
    height: 400px;
  }
  @media screen and (min-width: 1366px) {
    height: 160px;
    &.opened {
      height: 300px;
    }
  }
}

.course-title {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%; /* 19.344px */
  letter-spacing: 1.04px;
  transform: translateY(-25px);
  transition: transform 300ms ease-in-out;
  &--opened {
    transform: translateY(0px);
  }
}
.course-subtitle {
  color: var(--neutral-gray);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 1.12px;
  transform: translateY(-25px);
  transition: transform 300ms ease-in-out;
  &--opened {
    transform: translateY(0px);
    margin-bottom: 16px;
  }
}

.inner-data {
  opacity: 0;
  animation: fadeIn 300ms 300ms ease-in-out forwards;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

hr {
  border: none;
  height: 1px;
  margin: 0;
  width: 100%;
  background-color: rgba(60, 62, 81, 0.2);
}

.course-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  &--opened {
    opacity: 1;
  }
}

.course-chip {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 25px;
  border-radius: 13px;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 129.9%; /* 15.588px */
  letter-spacing: 0.96px;
}

.course-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-info--item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > p {
    color: var(--neutral-gray);
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.9%; /* 20.006px */
    letter-spacing: 1.12px;
  }
}

.course-cta {
  width: 100%;
  display: grid;
  grid-template-areas: "cost ." "link link";
  row-gap: 16px;
  @media screen and (min-width: 1366px) {
    grid-template-areas: "cost link";
    align-items: center;
  }
}

.course-cost {
  grid-area: cost;
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%;
  letter-spacing: 1.3px;

  & > span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.91px;
  }
}

.course-link {
  grid-area: link;
  display: flex;
  position: relative;
  height: 44px;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  & > span {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 8px 14px;
    border-radius: 3px;
    border: 1px solid var(--neutral-dark);
    color: var(--neutral-dark);
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  }
  &:hover > span {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
  }
  &:focus-visible > span {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
    outline: none;
  }
}

.expand-button {
  left: 18px;
  bottom: 10px;
  position: absolute;
  min-height: 44px;
  min-width: 44px;
  cursor: pointer;
  border: none;
  appearance: none;
  background-color: transparent;
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  &:focus-visible {
    outline: 1px solid var(--neutral-dark);
  }
  &.opened {
    & > img {
      rotate: 180deg;
    }
  }
}
</style>

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
const imageUrl = `${
  props.data.image.fields.file?.url as string
}?fm=webp&w=300&h=290`;
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
      <img :alt="imageTitle" class="course-image" :src="imageUrl" />
    </header>
    <main
      :id="`content-${props.id}`"
      :aria-expanded="open"
      :class="open ? 'opened' : ''"
    >
      <button
        :aria-controls="`content-${props.id}`"
        :class="`expand-button ${open ? 'opened' : ''}`"
        type="button"
        @click="open = !open"
      >
        <span>Mostrar {{ open ? "menos" : "mais" }}</span>
        <img
          width="14"
          height="14"
          src="/icons/chevron-icon.svg"
          alt="Decorative icon: Arrow up"
          aria-hidden="true"
        />
      </button>
      <h3 class="course-title">{{ props.data.title }}</h3>
      <p class="course-subtitle">{{ props.data.description }}</p>
      <div v-if="open" class="inner-data course-chips">
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
          <a class="course-link" :href="props.data.url">Comprar curso</a>
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
  height: 350px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  outline: none;
}
header {
  position: absolute;
  bottom: 0;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 0;
  border-radius: 18px;
  box-shadow: 12px 0px 30px -3px rgba(0, 0, 0, 0.1);
}

.course-image {
  position: absolute;
  z-index: 1;
  top: -50px;
}

main {
  height: 142px;
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  display: flex;
  width: 100%;
  padding-block: 8px;
  padding-inline: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  transition: height 300ms ease-in-out;
  &.opened {
    height: 250px;
  }
}

.course-title {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%; /* 19.344px */
  letter-spacing: 1.04px;
}
.course-subtitle {
  color: var(--neutral-gray);
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 1.12px;
}

.inner-data {
  opacity: 0;
  animation: fadeIn 300ms 300ms ease-in-out forwards;
  width: 100%;
}

hr {
  border: none;
  height: 1px;
  width: 100%;
  background-color: rgba(60, 62, 81, 0.2);
}

.course-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.9%; /* 20.006px */
    letter-spacing: 1.12px;
  }
}

.course-cta {
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-cost {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%;
  letter-spacing: 1.56px;

  & > span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.91px;
  }
}

.course-link {
  display: flex;
  height: 44px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  border: 1px solid var(--neutral-dark);
  text-decoration: none;
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
  }
  &:focus {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
    outline: none;
  }
}

.expand-button {
  margin-left: -6px;
  min-height: 44px;
  min-width: 44px;
  cursor: pointer;
  border: none;
  appearance: none;
  background-color: transparent;
  color: var(--high-contrast-blue);
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 1.12px;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: 1px solid var(--neutral-dark);
  }
  &.opened {
    & > img {
      rotate: 180deg;
    }
  }
}
</style>

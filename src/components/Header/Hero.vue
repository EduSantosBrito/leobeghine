<script setup lang="ts">
import MaskImageFlower from "../MaskImageFlower.vue";
import MaskImageCircle from "../MaskImageCircle.vue";
</script>
<template>
  <section>
    <div class="info-group">
      <span>Cursos e mentoria de inglês online</span>
      <h1>Apaixone-se pelo Inglês!</h1>
      <p>
        Descubra um novo caminho para o aprendizado de inglês, onde a fluência
        se une à diversão.
      </p>
      <a href="#cursos">Ver cursos</a>
    </div>
    <div class="icons-grid" aria-hidden="true">
      <img
        alt="Decorative icon: Using brand to represent a heart"
        aria-disabled="true"
        class="icons-grid--heart"
        src="/icons/heart-icon.svg"
      />
      <img
        alt="Decorative icon: Using brand to represent a message balloon in red"
        aria-disabled="true"
        class="icons-grid--you-can-do-it"
        src="/icons/you-can-do-it-icon.svg"
      />
      <img
        alt="Decorative icon: Using brand to represent a message ballon in orange"
        aria-disabled="true"
        class="icons-grid--you-can-do-it-orange"
        src="/icons/you-can-do-it-orange-icon.svg"
      />
      <MaskImageCircle class="icons-grid--circle" />
      <MaskImageFlower class="icons-grid--flower" />
      <img
        alt="Decorative icon: Using brand to represent a smile"
        aria-disabled="true"
        class="icons-grid--smile"
        src="/icons/smile-icon.svg"
      />
      <img
        alt="Decorative icon: An arrow"
        aria-disabled="true"
        class="icons-grid--arrow"
        src="/icons/arrow-icon.svg"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  padding-inline: 8%;
  margin-top: 94px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
}
.info-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  @media screen and (min-width: 1366px) {
    gap: 32px;
  }
}
span {
  color: var(--high-contrast-red);
  font-family: Noto Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%; /* 12.09px */
  letter-spacing: 0.65px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
}
h1 {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 107.9%; /* 43.16px */
  letter-spacing: 0.4px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1366px) {
    font-size: 80px;
  }
}
p {
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 129.9%; /* 18.186px */
  letter-spacing: 1.12px;
  max-width: 492px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
}
a {
  margin-top: 16px;
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  display: flex;
  width: 174px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  border: 2px solid var(--neutral-dark);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  text-decoration: none;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

  &:hover {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
  }

  &:focus-visible {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    padding: 10px 16px;
  }
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "heart you-can-do-it ."
    "flower smile arrow";
  justify-items: center;
  gap: 16px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      ". . circle"
      ". you-can-do-it heart"
      "arrow smile flower";
    margin-top: 0;
  }
}
.icons-grid--heart {
  grid-area: heart;
  width: 66px;
  height: 67px;
  @media screen and (min-width: 768px) {
    width: 99px;
    height: 100px;
  }
  @media screen and (min-width: 1366px) {
    width: 168px;
    height: 170px;
  }
}
.icons-grid--you-can-do-it-orange {
  transition: opacity 300ms ease-in-out;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  grid-area: you-can-do-it;
  width: 67px;
  height: 67px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
  }
}
.icons-grid--you-can-do-it {
  transition: opacity 300ms ease-in-out;
  opacity: 1;
  &:hover {
    opacity: 0;
  }
  grid-area: you-can-do-it;
  width: 67px;
  height: 67px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
  }
}
.icons-grid--flower {
  grid-area: flower;
  width: 67px;
  height: 67px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
  }
}
.icons-grid--smile {
  grid-area: smile;
  width: 68px;
  height: 67px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 100px;
  }
  @media screen and (min-width: 1366px) {
    width: 174px;
    height: 170px;
  }
}
.icons-grid--arrow {
  grid-area: arrow;
  width: 67px;
  height: 64px;
  rotate: 270deg;

  @media screen and (min-width: 768px) {
    rotate: initial;
    width: 100px;
    height: 96px;
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 162px;
  }
}

.icons-grid--circle {
  display: none;
  @media screen and (min-width: 768px) {
    display: initial;
    grid-area: circle;
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 1366px) {
    width: 170px;
    height: 170px;
  }
}
</style>

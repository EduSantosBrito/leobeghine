<script setup lang="ts">
import MaskImage from "../MaskImage.vue";
</script>
<template>
  <section>
    <span>Curso e mentoria online</span>
    <h1>Apaixone-se pelo inglês</h1>
    <p>
      Descubra um novo caminho para o aprendizado de inglês, onde a fluência se
      une à diversão.
    </p>
    <a href="#cursos">Ver cursos</a>
    <div class="icons-grid" aria-hidden="true">
      <img class="icons-grid--heart" src="/icons/heart-icon.svg" />
      <img
        class="icons-grid--you-can-do-it"
        src="/icons/you-can-do-it-icon.svg"
      />
      <MaskImage class="icons-grid--flower" />
      <img class="icons-grid--smile" src="/icons/smile-icon.svg" />
      <img class="icons-grid--arrow" src="/icons/arrow-icon.svg" />
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
  padding-inline: 5%;
}
span {
  color: #da2b2b;
  font-family: Noto Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%; /* 12.09px */
  letter-spacing: 0.65px;
  text-transform: uppercase;
}
h1 {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 107.9%; /* 43.16px */
  letter-spacing: 0.4px;
}
p {
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 129.9%; /* 18.186px */
  letter-spacing: 1.12px;
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
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--neutral-white);
    background-color: var(--neutral-dark);
  }
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "heart you-can-do-it ."
    "flower smile arrow";
  gap: 16px;
  margin-top: 40px;
}
.icons-grid--heart {
  grid-area: heart;
  width: 66px;
  height: 67px;
  flex-shrink: 0;
}
.icons-grid--you-can-do-it {
  grid-area: you-can-do-it;
  width: 67px;
  height: 67px;
  flex-shrink: 0;
}
.icons-grid--flower {
  grid-area: flower;
  width: 67px;
  height: 67px;
  flex-shrink: 0;
}
.icons-grid--smile {
  grid-area: smile;
  width: 68px;
  height: 67px;
  flex-shrink: 0;
}
.icons-grid--arrow {
  grid-area: arrow;
  width: 67px;
  height: 64px;
  flex-shrink: 0;
}
</style>

<script setup lang="ts"></script>
<template>
  <button type="button" aria-label="Open menu">
    <img
      width="28"
      height="28"
      src="/icons/hamburger-icon.svg"
      aria-hidden="true"
    />
  </button>
  <ul>
    <li><a href="#">Início</a></li>
    <li><a href="#">Sobre mim</a></li>
    <li><a href="#">Cursos</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</template>
<style scoped lang="scss">
button {
  appearance: none;
  background-color: transparent;
  border: none;
}
a {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 500;
  color: var(--neutral-dark);
}
ul {
  display: none;
}
</style>

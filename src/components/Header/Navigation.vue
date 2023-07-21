<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const navRef = ref();
const triggerRef = ref();
const open = ref<boolean>(false);

const onTriggerClick = () => {
  open.value = !open.value;
};

const clickOutsideListener = (event: Event) => {
  if (
    event.target !== navRef.value &&
    event.target !== triggerRef.value &&
    !event.composedPath().includes(navRef.value) &&
    !event.composedPath().includes(triggerRef.value) &&
    open.value
  ) {
    open.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutsideListener);
});
onBeforeUnmount(() => {
  window.removeEventListener("click", clickOutsideListener);
});
</script>
<template>
  <button
    ref="triggerRef"
    type="button"
    @click="onTriggerClick"
    aria-label="Open menu"
  >
    <img
      alt="Decorative icon"
      width="28"
      height="28"
      src="/icons/hamburger-icon.svg"
      aria-hidden="true"
    />
  </button>
  <nav
    ref="navRef"
    :class="open ? 'nav--opened' : 'nav--closed'"
    aria-controls="menu"
    :aria-expanded="open"
  >
    <ul id="menu">
      <li><a href="#">Início</a></li>
      <li><a href="#">Sobre mim</a></li>
      <li><a href="#">Cursos</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
button {
  margin-right: 5%;
  z-index: 5;
  appearance: none;
  background-color: transparent;
  border: none;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: 1px solid var(--neutral-dark);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
}
a {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 500;
  color: var(--neutral-white);
  text-decoration: none;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    color: var(--neutral-dark);
  }
}
nav {
  width: -webkit-fill-available;
  width: -moz-fill-available;
  width: fill-available;
  z-index: 1;
  position: absolute;
  top: 24px;
  display: grid;
  margin-top: 56px;
  grid-template-columns: 1fr;
  transition: grid-template-rows 300ms;
  background-color: var(--neutral-dark);

  &.nav--opened {
    & > ul {
      opacity: 1;
    }
    grid-template-rows: 300px;
  }
  &.nav--closed {
    & > ul {
      opacity: 0;
    }
    grid-template-rows: 0px;
  }

  @media screen and (min-width: 768px) {
    width: initial;
    z-index: initial;
    position: initial;
    margin-top: initial;
    transition: initial;
    background-color: initial;
    &.nav--closed {
      & > ul {
        opacity: initial;
      }
      grid-template-rows: initial;
    }

    display: block;
    margin-right: 5%;
    height: 44px;
  }
}

ul {
  padding: 0;
  transition: opacity 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    margin: 0;
  }
}

li {
  list-style: none;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

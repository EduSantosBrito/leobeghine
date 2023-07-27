<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const navRef = ref();
const triggerRef = ref();
const open = ref<boolean>(false);
const isMobile = ref<boolean>(false);

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
  if (screen.width < 768) {
    isMobile.value = true;
  }
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
    aria-label="Open menu"
    @click="onTriggerClick"
  >
    <img
      alt="Decorative icon: Hamburger menu"
      width="28"
      height="28"
      src="/icons/hamburger-icon.svg"
      aria-hidden="true"
    />
  </button>
  <nav
    ref="navRef"
    aria-controls="menu"
    :aria-hidden="isMobile && !open ? 'true' : 'false'"
    :class="open ? 'nav--opened' : 'nav--closed'"
    :aria-expanded="open"
  >
    <ul id="menu">
      <li>
        <a
          :class="isMobile && !open ? 'menu-hidden' : ''"
          :tabindex="isMobile && !open ? '-1' : '0'"
          href="/"
        >
          Início
        </a>
      </li>
      <li>
        <a
          :class="isMobile && !open ? 'menu-hidden' : ''"
          :tabindex="isMobile && !open ? '-1' : '0'"
          href="#sobre"
        >
          Sobre mim
        </a>
      </li>
      <li>
        <a
          :class="isMobile && !open ? 'menu-hidden' : ''"
          :tabindex="isMobile && !open ? '-1' : '0'"
          href="#cursos"
        >
          Cursos
        </a>
      </li>
      <li>
        <a
          :class="isMobile && !open ? 'menu-hidden' : ''"
          :tabindex="isMobile && !open ? '-1' : '0'"
          href="#cta"
        >
          Contato
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
button {
  margin-right: 8%;
  z-index: 25;
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

  &:focus-visible {
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

  &:focus-visible {
    border-radius: 4px;
    outline: 1px solid var(--neutral-white);
    outline-offset: 4px;
  }

  @media screen and (min-width: 768px) {
    color: var(--neutral-dark);
    &:focus-visible {
      outline: 1px solid var(--neutral-dark);
    }
  }
}
nav {
  width: 100%;
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
    margin-right: 8%;
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

.menu-hidden {
  visibility: hidden;
}
</style>

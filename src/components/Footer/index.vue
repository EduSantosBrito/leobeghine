<template>
  <footer>
    <slot />
  </footer>
</template>
<style lang="scss">
footer {
  display: grid;
  grid-template-areas:
    "logo logo"
    "description description"
    "divider divider"
    "socials copyright";
  margin-top: 80px;
  margin-inline: 8%;
  gap: 24px;
  margin-bottom: 40px;
}
.footer-logo {
  grid-area: logo;
}
.footer-description {
  grid-area: description;
  color: var(--neutral-gray);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  max-width: 240px;
  @media screen and (min-width: 768px) {
    max-width: 423px;
  }
}
.footer-socials {
  grid-area: socials;
  margin-left: -10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  width: fill-available;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 44px;
    min-height: 44px;
    border-radius: 4px;
    &:focus-visible {
      outline: 1px solid var(--neutral-dark);
      outline-offset: 4px;
    }
  }
}
.footer-divider {
  grid-area: divider;
  height: 1px;
  width: 100%;
  border: none;
  background-color: #eaecf0;
}
.footer-copyright {
  grid-area: copyright;
  color: #5C5E6D;
  text-align: center;

  /* Text md/Regular */
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-align: end;
}
</style>

<template>
  <section id="cta">
    <h2>Agende já sua mentoria!</h2>
    <p>
      Acelere seu progresso no inglês e conquiste fluência e confiança no
      idioma.
    </p>
    <a href="https://api.whatsapp.com/send?phone=5532991935101" target="_blank">
      Entrar em contato
    </a>
  </section>
</template>
<style scoped lang="scss">
section {
  overflow: hidden;
  position: relative;
  height: 338px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background-color: var(--neutral-dark);
  z-index: 1;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 426px;
    height: 426px;
    border-radius: 50%;
    background: #151829;
    z-index: -3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
    &::before {
      width: 700px;
      height: 700px;
    }
  }
  @media screen and (min-width: 1366px) {
    &::before {
      width: 1050px;
      height: 1050px;
    }
  }
}
h2 {
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 255px;
    height: 255px;
    border-radius: 50%;
    background: #20212f;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 330px;
    height: 330px;
    border-radius: 50%;
    background: #1b1d2c;
    z-index: -2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: 768px) {
    &::after {
      width: 541px;
      height: 541px;
    }
    &::before {
      width: 418px;
      height: 418px;
    }
  }
  @media screen and (min-width: 1366px) {
    &::after {
      width: 849px;
      height: 849px;
    }
    &::before {
      width: 643px;
      height: 643px;
    }
  }
  color: var(--neutral-white);
  text-align: center;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 114.9%; /* 32.172px */
  letter-spacing: 0.7px;
  z-index: 5;
}
p {
  color: var(--neutral-white);
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 22.864px */
  letter-spacing: 1.28px;
  z-index: 5;
  max-width: 432px;
}
a {
  color: var(--neutral-white);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  display: flex;
  width: 219px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  border: 2px solid var(--neutral-white);
  text-decoration: none;
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  &:hover,
  &:focus-visible {
    background-color: var(--neutral-white);
    color: var(--neutral-dark);
    outline: none;
  }
  z-index: 5;
}
</style>

<template>
  <section>
    <header>
      <h2>Veja o progresso de alguns dos meus alunos</h2>
      <p>
        Assista aos depoimentos inspiradores e veja como posso ajudar você a
        alcançar seus objetivos no inglês.
      </p>
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>
<style scoped lang="scss">
section {
  padding-top: 130px;
  width: min(100%, 1440px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
}
header {
  position: relative;
  margin-inline: 8%;
  gap: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 512px;
  &::before {
    border-top-left-radius: 75%;
    content: "";
    display: block;
    position: absolute;
    top: -72px;
    left: 0;
    width: 48px;
    height: 48px;
    background-color: var(--secondary-purple);
    @media screen and (min-width: 768px) {
      top: 0;
      left: 0;
      gap: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding-left: 64px;
  }
}
h2 {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.9%; /* 22.98px */
  letter-spacing: 0.5px;
  max-width: 395px;
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
main {
  margin-inline: 8%;
}
</style>

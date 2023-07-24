<template>
  <section id="cursos">
    <header>
      <span>Cursos de inglês online</span>
      <h2>Aprenda inglês com o que gosta</h2>
      <p>
        Descubra uma forma divertida e envolvente de aprender inglês através das
        suas séries e músicas pop preferidas. <br />Aulas gravadas para assistir
        onde e quando quiser.
      </p>
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: 80px;
  width: min(100%, 1440px);
  margin-inline: auto;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  @media screen and (min-width: 1366px) {
    gap: 32px;
  }
  padding-bottom: 64px;
}
span {
  color: var(--high-contrast-red);
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.9%; /* 14.508px */
  letter-spacing: 0.78px;
  text-transform: uppercase;
}
h2 {
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.9%; /* 32.172px */
  letter-spacing: 0.7px;
}
p {
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 22.864px */
  letter-spacing: 1.28px;
}
header {
  margin-inline: 8%;
}
main {
  margin-inline: 8%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media screen and (min-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
</style>

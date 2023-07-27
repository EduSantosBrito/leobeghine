<template>
  <section>
    <header>
      <span>mentoria de inglês online</span>
      <h2>Aprenda com foco em suas necessidades</h2>
      <p>
        Invista no seu futuro, avance na sua carreira, alcance sonhos que antes
        eram impossíveis. Aulas de inglês online individuais e personalizadas
        por aluno pelo Google meets.
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
  padding-bottom: 140px;
  width: min(100%, 1440px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1366px) {
    flex-direction: row;
  }
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  margin-inline: 8%;
  @media screen and (min-width: 1366px) {
    gap: 32px;
  }
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
  max-width: 359px;
}
p {
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 22.864px */
  letter-spacing: 1.28px;
  max-width: 500px;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin-inline: 8%;
  margin-top: 64px;
  @media screen and (min-width: 1366px) {
    margin: 0;
  }
}
</style>

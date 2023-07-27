<template>
  <section>
    <header>
      <img
        alt="A picture of Leo!"
        width="200"
        height="247"
        aria-hidden="true"
        src="/leo.webp"
      />
      <div class="big-numbers">
        <p class="big-numbers--text">
          <span>+5000</span><br />
          alunos
        </p>
        <hr class="big-numbers--divider" />
        <p class="big-numbers--text">
          <span>+10 anos</span><br />
          de experiência
        </p>
      </div>
    </header>
    <main>
      <h2>
        Desbloqueie seu<br />
        potencial no inglês
      </h2>
      <p class="subtitle">
        É possível dominar o inglês de maneira leve e tranquila, focando em suas
        necessidades, seja conversação, compreensão auditiva ou preparação para
        exames.
      </p>
      <div class="socials">
        <a href="https://www.tiktok.com/@englishwithleob" target="_blank">
          <img
            width="24"
            height="25"
            alt="Tiktok brand"
            src="/icons/tiktok-icon.svg"
          />
        </a>
        <a href="https://www.instagram.com/leobeghine" target="_blank">
          <img
            width="24"
            height="25"
            alt="Instagram brand"
            src="/icons/instagram-icon.svg"
          />
        </a>
      </div>
    </main>
    <footer>
      <div class="features">
        <img
          width="48"
          height="48"
          alt="Decorative icon: ruler to represent tailor-made classes"
          aria-hidden="true"
          src="/icons/classes-icon.svg"
        />
        <h3 class="features--title">Aulas sob medida</h3>
        <p class="features--description">
          Aulas personalizadas para o inglês básico ao avançado, projetadas para
          seu ritmo e necessidades individuais.
        </p>
      </div>
      <div class="features">
        <img
          width="48"
          height="48"
          alt="Decorative icon: certificate to represent certified classes"
          aria-hidden="true"
          src="/icons/experience-icon.svg"
        />
        <h3 class="features--title">Excelência Certificada</h3>
        <p class="features--description">
          Como professor de inglês, possuo a certificação CELTA de Cambridge,
          garantindo a qualidade do ensino.
        </p>
      </div>
      <div class="features">
        <img
          width="48"
          height="48"
          alt="Decorative icon: graduation hat to represent academic background"
          aria-hidden="true"
          src="/icons/academy-icon.svg"
        />
        <h3 class="features--title">Formação Acadêmica</h3>
        <p class="features--description">
          Com pós-graduação em Letras pela PUC, trago uma base acadêmica robusta
          para suas aulas.
        </p>
      </div>
    </footer>
  </section>
</template>
<style scoped lang="scss">
section {
  margin-top: 72px;
  margin-bottom: 100px;
  display: grid;
  grid-template-areas:
    "content"
    "big-numbers"
    "features";
  margin-inline: 8%;

  @media screen and (min-width: 768px) {
    grid-template-areas:
      "big-numbers content"
      "features features";
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
}
h2 {
  align-self: flex-start;
  color: var(--neutral-dark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 114.9%; /* 22.98px */
  letter-spacing: 0.5px;
  @media screen and (min-width: 1366px) {
    font-size: 28px;
  }
}

.subtitle {
  color: var(--neutral-dark);
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 129.9%; /* 18.186px */
  letter-spacing: 1.12px;
  @media screen and (min-width: 1366px) {
    font-size: 16px;
  }
}

main {
  max-width: 410px;
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  align-self: flex-end;
  @media screen and (min-width: 1366px) {
    align-self: center;
    justify-self: center;
  }
}

.socials {
  margin-left: -10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  width: fill-available;
}

header {
  grid-area: big-numbers;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: relative;
  width: 288px;

  & > img {
    width: 200px;
    margin-left: auto;
    @media screen and (min-width: 768px) {
      margin-left: initial;
      margin-right: auto;
    }
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 266px;
    height: 177px;
    border-top-left-radius: 80px;
    background: var(--primary-blue);
  }

  @media screen and (min-width: 768px) {
    justify-self: flex-start;
  }

  @media screen and (min-width: 1366px) {
    justify-self: center;

    width: 480px;
    & > img {
      width: 383px;
      height: 475px;
    }
    &::before {
      width: 479px;
      height: 344px;
      border-top-left-radius: 160px;
    }
  }
}

.big-numbers {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  bottom: 32px;
  left: -28px;
  position: absolute;
  width: 182px;
  height: 55px;
  border-radius: 80px 0 80px 80px;
  background-color: var(--high-contrast-red);
  @media screen and (min-width: 768px) {
    border-radius: 0 80px 80px 80px;
    left: initial;
    right: -28px;
  }
  @media screen and (min-width: 1366px) {
    width: 316px;
    height: 106px;
    gap: 24px;
  }
}

.big-numbers--text {
  color: var(--neutral-white);
  font-family: Montserrat;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: 99%; /* 8.91px */

  & > span {
    font-size: 12px;
    font-weight: 700;
  }
  @media screen and (min-width: 1366px) {
    font-size: 16px;
    & > span {
      font-size: 20px;
    }
  }
}

.big-numbers--divider {
  margin: 0;
  width: 1px;
  height: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  @media screen and (min-width: 1366px) {
    height: 60px;
  }
}

footer {
  grid-area: features;
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1366px) {
    margin-top: 80px;
    gap: 80px;
  }
}

.features {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  max-width: 287px;
}

.features--title {
  margin-top: 12px;
  color: var(--neutral-dark);
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 166.667% */
}

.features--description {
  color: var(--neutral-gray);
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 1.12px;
}

a {
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
</style>

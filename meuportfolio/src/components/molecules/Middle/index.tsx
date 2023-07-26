import { useTranslation } from "react-i18next";
import * as S from "./styles";
import "../../../styles/variables.css";

const Middle = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.Texts id="projects">
        <h3>{t("feed.title")}</h3>
        <p>{t("feed.text")}</p>
      </S.Texts>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "8%",
          gap: "2%",
        }}
      >
        <S.Cards
        ></S.Cards>
        <S.Cards
        ></S.Cards>
        <S.Cards
        ></S.Cards>
      </section>

      <S.Texts id="experiences">
        <h3>{t("feed.subtitle")}</h3>
        <p>{t("feed.subtext")}</p>
      </S.Texts>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "8%",
          gap: "2%",
        }}
      >
        <S.Cards
        ></S.Cards>
        <S.Cards
        ></S.Cards>
        <S.Cards
        ></S.Cards>
      </section>
    </S.Container>
  );
};

export default Middle;

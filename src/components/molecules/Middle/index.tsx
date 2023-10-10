import { useTranslation } from "react-i18next";
import * as S from "./styles";
import "../../../styles/variables.css";
import CarouselProjects from "../Grid";

const Middle = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <S.Texts id="projects">
        <h3>{t("feed.title")}</h3>
        <p>{t("feed.text")}</p>
      </S.Texts>

      <CarouselProjects />
      <S.Texts id="experiences">
        <h2>{t("feed.experience")}</h2>
        {/* <p>{t("feed.subtext")}</p> */}
      </S.Texts>

      <S.OcupationDiv>
          <p>{t("feed.ocupation")}</p>
      </S.OcupationDiv>
    </S.Container>
  );
};

export default Middle;

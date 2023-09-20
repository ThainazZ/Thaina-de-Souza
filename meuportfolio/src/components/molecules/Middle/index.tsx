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
    </S.Container>
  );
};

export default Middle;

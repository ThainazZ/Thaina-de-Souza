import { useTranslation } from "react-i18next";
import * as S from "./styles";
import "../../../styles/variables.css";

const Middle = () => {
  const { t, i18n } = useTranslation();
  return (
    <S.Container>
      <div  id="projects">
        <h3>{t("feed.title")}</h3>
        <p>{t("feed.text")}</p>
      </div>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "8%",
          gap: "5%",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "var(--secondary-linear)",
            backdropFilter: "blur(30px)",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "var(--secondary-linear)",
            backdropFilter: "blur(30px)",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "var(--secondary-linear)",
            backdropFilter: "blur(30px)",
            borderRadius: "10px",
          }}
        ></div>
      </section>

      <div id="experiences" style={{ paddingTop: "8%" }}>
        <h3>{t("feed.subtitle")}</h3>
        <p>{t("feed.subtext")}</p>
      </div>

      <section 
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "8%",
          paddingBottom: "8%",
          gap: "5%",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "var(--secondary-linear)",
            backdropFilter: "blur(30px)",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "var(--secondary-linear)",
            backdropFilter: "blur(30px)",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "var(--secondary-linear)",
            backdropFilter: "blur(30px)",
            borderRadius: "10px",
          }}
        ></div>
      </section>
    </S.Container>
  );
};

export default Middle;

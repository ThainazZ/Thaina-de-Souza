import * as S from "./styles";
import githubImage from "../../../assets/github.png";
import linkedinImage from "../../../assets/linkedin.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function Final() {
  const { t } = useTranslation();

  const LinkedinLink = styled.a`
    display: inline-block;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(
        1.1
      ); // Increase the scale to make the image bigger on hover
    }
  `;

  const LinkedinImage = styled.img`
    width: 70px;
    padding-bottom: 8%;
    margin-right: 20px;
  `;

  const GithubLink = styled.a`
    display: inline-block;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(
        1.1
      ); // Increase the scale to make the image bigger on hover
    }
  `;

  const GithubImage = styled.img`
    width: 70px;
    padding-bottom: 8%;
    margin-right: 20px;
  `;

  return (
    <S.Container>
      <div>
        <p style={{ color: "white", fontSize: "30px", fontWeight: "300" }}>
          {t("footer.text")}
        </p>
      </div>
      <br></br>

      <div style={{ alignItems: "center" }}>
        <LinkedinLink
          href="https://www.linkedin.com/in/thain%C3%A1-souza-799a85186/"
          target="_blank"
        >
          <LinkedinImage
            src={linkedinImage}
            style={{
              width: "70px",
              paddingBottom: "8%",
              margin: "0 20px 70px 0px",
            }}
          ></LinkedinImage>
        </LinkedinLink>

        <GithubLink href="https://github.com/ThainazZ" target="_blank">
          <GithubImage
            src={githubImage}
            style={{
              width: "70px",
              paddingBottom: "8%",
              margin: "0 0px 70px 20px",
            }}
          ></GithubImage>
        </GithubLink>
      </div>
    </S.Container>
  );
}

export default Final;

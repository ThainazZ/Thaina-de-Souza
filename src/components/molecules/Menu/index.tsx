import * as S from "./styles";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  return (
    <S.MenuList>
      <S.ItemList>
        <S.MenuItemLink href="#home">{t("menu.page1")}</S.MenuItemLink>
      </S.ItemList>

      <S.ItemList>
        <S.MenuItemLink href="#projects">{t("menu.page2")}</S.MenuItemLink>
      </S.ItemList>

      <S.ItemList>
        <S.MenuItemLink href="#experiences">{t("menu.page3")}</S.MenuItemLink>
      </S.ItemList>
    </S.MenuList>
  );
};

export default Menu;

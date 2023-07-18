import * as S from './styles';
import { useTranslation } from 'react-i18next';




const Menu = () => {
    const { t, i18n } = useTranslation();
    return (
        <S.MenuList>

        <S.ItemList>
            <a href='#'>{t('menu.page1')}</a>
        </S.ItemList>

        <S.ItemList>
            <a href='#'>{t('menu.page2')}</a>
        </S.ItemList>


        <S.ItemList>
            <a href='#'>{t('menu.page3')}</a>
        </S.ItemList>


        </S.MenuList>
    );
};

export default Menu;

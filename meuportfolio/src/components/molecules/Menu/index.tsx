import * as S from './styles';
import { useTranslation } from 'react-i18next';




const Menu = () => {
    const { t } = useTranslation();
    return (
        <S.MenuList>

        <S.ItemList>
            <a href='#home'>{t('menu.page1')}</a>
        </S.ItemList>

        <S.ItemList>
            <a href='#projects'>{t('menu.page2')}</a>
        </S.ItemList>


        <S.ItemList>
            <a href='#experiences'>{t('menu.page3')}</a>
        </S.ItemList>


        </S.MenuList>
    );
};

export default Menu;

import * as S from './styles';
import { useTranslation } from 'react-i18next';




const Menu = () => {
    const { t, i18n } = useTranslation();
    return (
        <S.MenuList>

        <S.ItemList>
            <a href='#'>Início</a>
        </S.ItemList>

        <S.ItemList>
            <a href='#'>Projetos</a>
        </S.ItemList>


        <S.ItemList>
            <a href='#'>Experiências</a>
        </S.ItemList>


        </S.MenuList>
    );
};

export default Menu;

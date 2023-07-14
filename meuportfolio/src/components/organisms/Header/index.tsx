import * as S from './styles';
import Menu from '../../molecules/Menu';
import LanguageSelect from '../../atoms/SelectLanguage';


function Header() {
    return (
        <S.Box>
            <LanguageSelect />
            <Menu />
        </S.Box>
        
    );
};

export default Header;
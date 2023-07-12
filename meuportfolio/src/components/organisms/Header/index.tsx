import * as S from './styles';
import Menu from '../../molecules/Menu';
import { Select } from '../../atoms/SelectLanguage';


function Header() {
    return (
        <S.Box>
            <Select />
            <Menu />
        </S.Box>
        
    );
}

export default Header;
import * as S from './styles';
import Menu from '../../molecules/Menu';
import ToggleSwitch from '../../atoms/ToggleSwitch';


function Header() {
    return (
        <S.Box>
            <ToggleSwitch />
            <Menu />
        </S.Box>
    );
}

export default Header;
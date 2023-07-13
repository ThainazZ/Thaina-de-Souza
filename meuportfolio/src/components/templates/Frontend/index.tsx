import * as S from './styles';
import Main from '../../organisms/Main';
import Header from '../../organisms/Header';


//define o front-end a ser puxado pelo App no pages
type FrontendProps = {
    children: React.ReactNode;
};


const Frontend = ({ children }: FrontendProps) => {
    return (
    <S.Container>
        <Header>
            </Header>
        <Main />
    </S.Container>
    );
};

export default Frontend;
import * as S from './styles';
import Header from '../../organisms/Header';
import Title from '../../atoms/Title';
import Content from '../../organisms/Content';
import Middle from '../../molecules/Middle';
import Final from '../../organisms/Footer';

//define o front-end a ser puxado pelo App no pages
type FrontendProps = {
    children: React.ReactNode;
};


const Frontend = ({ children }: FrontendProps) => {
    return (
    <S.Container>
        
        <Header>
            </Header>
            <Title />
            <Content />
            <Middle />
            <Final />

    </S.Container>

    
       
    );
};

export default Frontend;
import * as S from './styles';
import Header from '../../organisms/Header';
import Title from '../../atoms/Title';
import Content from '../../organisms/Content';
import Middle from '../../molecules/Middle';
import Final from '../../organisms/Footer';

//define o front-end a ser puxado pelo App no pages


const Frontend = () => {
    return (
    <S.Container>
        
        <Header />
            <Title />
            <Content />
            <Middle />
            <Final />

    </S.Container>

    
       
    );
};

export default Frontend;
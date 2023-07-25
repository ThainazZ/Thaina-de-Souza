import * as S from './styles';
import githubImage from '../../../assets/github.png';
import linkedinImage from '../../../assets/linkedin.png';
import { useTranslation } from 'react-i18next';

function Final() {
    const { t } = useTranslation();
    return (
        <S.Container>
            <div>
                <p style={{color:'white', fontSize: '50px',}}>{t('footer.title')}</p>
            </div>
            <br></br>
            <div>
                <p style={{color:'white', fontSize:'30px', fontWeight:'300'}}>{t('footer.text')}</p>
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <p style={{color:'white', fontSize:'18px', fontWeight:'300'}}>{t('footer.subtext')}</p>
            </div>
            <div style={{flexDirection:'row', paddingTop: '2rem'}}>
        <a href='https://www.linkedin.com/in/thain%C3%A1-souza-799a85186/' target='_blank'>
            <img src={linkedinImage} style={{
                width:'70px', 
                paddingBottom: '8%', 
                margin:'0 20px 0 0px' 
                }}></img></a>
                
        <a href='https://github.com/ThainazZ' target='_blank'>
            <img src={githubImage} style={{
                width:'70px', 
                paddingBottom: '8%', 
                margin:'0 0px 0 20px' 
                }}></img></a>
                </div>
        </S.Container>
        
    );
};

export default Final;
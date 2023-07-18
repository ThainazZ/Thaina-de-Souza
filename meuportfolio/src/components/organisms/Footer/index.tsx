import * as S from './styles';
import githubImage from '../../../assets/github.png';
import linkedinImage from '../../../assets/linkedin.png';

function Final() {
    return (
        <S.Container>
            <div>
                <p style={{color:'white', fontSize:'60px',}}>E agora?</p>
            </div>
            <br></br>
            <div>
                <p style={{color:'white', fontSize:'30px', fontWeight:'300'}}>Vamos trabalhar juntos!</p>
            </div>
            <br></br>
            <div>
                <p style={{color:'white', fontSize:'20px', padding:'0% 30% 4% 30%', fontWeight:'300'}}>Atualmente busco oportunidades híbridas 
(Brasil) ou 100% remotas (sem limites);</p>
            </div>
            <div style={{flexDirection:'row'}}>
        <img src={linkedinImage} style={{width:'70px', paddingBottom: '8%', margin:'0 20px 0 0px' }}></img>
        <img src={githubImage} style={{width:'70px', paddingBottom: '8%', margin:'0 0px 0 20px' }}></img>
                </div>
        </S.Container>
        
    );
};

export default Final;
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import reactImage from '../../../assets/React.png';
import typeImage from '../../../assets/Typescript.png';

const RightCard = () => {
    const { t, i18n } = useTranslation();
    return (
        <S.Container>
             <p
             style={{
                fontSize: '30px',
                fontWeight: '500',
                paddingTop: '5%',
             }}
             >
                {t('main.title')}
             </p>
             <div className='Box'
             style={{width:'200px', height:'250px', display: 'flex', alignItems: 'center', overflow:'hidden', overflowX:'scroll', scrollbarWidth: 'none', }}>

               <div className='React' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={reactImage} style={{width: '180px', paddingTop: '5%',}}></img>
                <p style={{width: '200px', textAlign: 'center', paddingTop: '3%',}}>
                Trabalho diariamente com React e aplicações webs;</p>
                </div> 

                <div className='Type' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={typeImage} style={{width: '180px', paddingTop: '5%',}}></img>
                <p style={{width: '200px', textAlign: 'center', paddingTop: '3%',}}>
                Utilizo em grande parte o Typesc;</p>
                </div> 


             </div>
           
        </S.Container>
        
        
    );
};

export default RightCard;
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import avatarImage from '../../../assets/AVATAR.png';


const LeftCard = () => {
    const { t } = useTranslation();
    return (
        <S.Container>
            
            <S.image
            src={avatarImage} 
            alt='avatar'
            />
     
             <p
            style={{
                textAlign: 'right',
                padding:'5%',
                fontSize: '25px',
                position: 'absolute',
                fontWeight: '300',
                lineHeight: '35px',
                
            }}>
                {t('main.subtitle')}
            <br />
            <p
            style={{
                paddingLeft:'40%',
                paddingTop: '2%',
            }}>
                {t('main.text')}
            </p>
           
            <p style={{fontFamily: 'Quicksand', fontSize: '20px', fontWeight: '600', paddingTop:'2%'}}>{t('main.salute')}</p>
         </p>

        </S.Container>
        
    );
};

export default LeftCard;
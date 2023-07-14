import { useTranslation } from 'react-i18next';
import * as S from './styles';
import avatarImage from '../../../assets/AVATAR.png';

const LeftCard = () => {
    const { t, i18n } = useTranslation();
    return (
        <S.Container>
            <img 
            src={avatarImage} 
            alt='avatar'
            style={{
            width: '365px',
            height: '300px',
            overflow: 'visible',
            objectFit: 'cover',
            marginLeft: '-40px',
            
            }}
            />
             <p
            style={{
                textAlign: 'right',
                justifyContent: 'center',
                
            }}
            >{t('main.subtitle')}</p>
        </S.Container>
        
        
    );
};

export default LeftCard;
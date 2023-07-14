import { useTranslation } from 'react-i18next';
import * as S from './styles';

const RightCard = () => {
    const { t, i18n } = useTranslation();
    return (
        <S.Container>
             <p>{t('main.subtitle')}</p>
        </S.Container>
        
        
    );
};

export default RightCard;
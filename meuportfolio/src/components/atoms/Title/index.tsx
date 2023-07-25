import { useTranslation } from 'react-i18next';
import * as S from './styles';



const Title = () => {
    const { t } = useTranslation();

    return (
      
        <S.titulo>{t('header.title')}</S.titulo>
      
    );
};

export default Title;
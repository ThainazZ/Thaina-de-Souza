import { useTranslation } from 'react-i18next';
import * as S from './styles';


const Title = () => {
    const { t, i18n } = useTranslation();


    return (
        <S.Title>
        <h1>{t('header.title')}</h1>
        </S.Title>
    );
};

export default Title;
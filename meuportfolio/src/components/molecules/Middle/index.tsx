import { useTranslation } from 'react-i18next';
import * as S from './styles';

const Middle = () => {
    const { t, i18n } = useTranslation();
    return (

        <S.Container>
           <div>
           <h3>{t('feed.title')}</h3>
            <p>{t('feed.text')}</p>
            </div> 

        <div style={{padding:'24rem'}} >
        <h3>{t('feed.subtitle')}</h3>
            <p>{t('feed.subtext')}</p>
        </div>
            

        </S.Container>


    );


};


export default Middle;
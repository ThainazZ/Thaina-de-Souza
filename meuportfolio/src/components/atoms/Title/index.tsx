import { useTranslation } from 'react-i18next';


const Title = () => {
    const { t } = useTranslation();

    return (
      
        <h1 id='home' style={{ color: 'white', 
        fontSize: '32px', 
        fontFamily: 'Quicksand',
        fontWeight: 'normal',
        textAlign: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem',}}>{t('header.title')}</h1>
      
    );
};

export default Title;
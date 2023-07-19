import { useTranslation } from 'react-i18next';


const Title = () => {
    const { t, i18n } = useTranslation();

    const headingStyles = {
        color: 'white', 
        fontSize: '32px', 
        fontFamily: 'Quicksand',
        fontWeight: 'normal',
        textAlign: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem',
      
      };

    return (
      
        <h1 id='home' style={headingStyles}>{t('header.title')}</h1>
      
    );
};

export default Title;
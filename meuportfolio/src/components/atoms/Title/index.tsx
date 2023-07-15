import { useTranslation } from 'react-i18next';
import { CSSProperties } from 'react';


const Title = () => {
    const { t, i18n } = useTranslation();

    const headingStyles = {
        color: 'white', 
        fontSize: '32px', 
        fontFamily: 'Quicksand',
        fontWeight: 'normal',
        textAlign: 'center',
        paddingTop: '8rem',
        paddingBottom: '3rem',
      
      };

    return (
      
        <h1 style={headingStyles}>{t('header.title')}</h1>
      
    );
};

export default Title;
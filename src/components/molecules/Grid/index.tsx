import { useTranslation } from 'react-i18next';
import * as S from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import previewIpump from '../../../assets/Preview1.png';



const CarouselProjects = () => {
  const { t } = useTranslation();

  return (

    <S.Container>
    <S.Box>
            <S.Card><img src={previewIpump} style={{width:'300px', height:'150px', borderRadius:'5px'}} /></S.Card>
            <p style={{padding: '1rem 1rem 0rem 1rem'}}>
            {t('feed.description')}
            </p>
            <a target="_blank" href='https://ipump-catalogo.vercel.app/' ><S.Button>Acessar</S.Button></a>
    </S.Box>
    <S.Box>
      
            <p style={{padding: '0rem 1rem'}}>
            {t('feed.description')}
            </p>
            <S.Button>Acessar</S.Button>
    </S.Box>
    <S.Box>
      
            <p style={{padding: '0rem 1rem'}}>
            {t('feed.description')}
            </p>
            <S.Button>Acessar</S.Button>
    </S.Box>
    </S.Container>
  );
};

export default CarouselProjects;
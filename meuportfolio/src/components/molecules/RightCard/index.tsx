import { useTranslation } from 'react-i18next';
import * as S from './styles';
import reactImage from '../../../assets/React.png';
import typeImage from '../../../assets/Typescript.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const RightCard = () => {
  const { t, i18n } = useTranslation();

  return (
    <S.Container>
      <p style={{fontSize: '40px', paddingBottom:'2%'}}>
        {t('main.title')}
      </p>
      <div className='Box' style={{maxWidth: '300px', maxHeight: '350px'}}>
        <Carousel infiniteLoop useKeyboardArrows swipeable showThumbs={false} emulateTouch showStatus={false} autoPlay>
          <div className='React' style={{padding:'4%'}}>
            <img src={reactImage} style={{width: '150px', height: '150px'}} alt='React' />
            <p style={{padding: '8%'}}>
              Trabalho diariamente com React e aplicações webs;
            </p>
          </div>
          <div className='Type' style={{padding:'4%'}}>
            <img src={typeImage} style={{width: '150px', height: '150px'}} alt='TypeScript' />
            <p style={{padding: '8%'}}>
              Utilizo em grande parte o Typescript;
            </p>
          </div>
        </Carousel>
      </div>
    </S.Container>
  );
};

export default RightCard;
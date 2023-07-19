import { useTranslation } from 'react-i18next';
import * as S from './styles';
import reactImage from '../../../assets/React.png';
import typeImage from '../../../assets/Typescript.png';
import jsImage from '../../../assets/Js.png';
import illuImage from '../../../assets/Illustrator.png';
import photoImage from '../../../assets/Photoshop.png';
import figmaImage from '../../../assets/Figma.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const RightCard = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <p style={{fontSize: '30px', paddingBottom:'2%'}}>
        {t('main.title')}
      </p>
      <div className='Box' style={{maxWidth: '300px', maxHeight: '350px'}}>
        <Carousel infiniteLoop useKeyboardArrows swipeable showThumbs={false} emulateTouch showStatus={false} autoPlay showArrows={false}>
          <div className='React' style={{paddingBottom:'8%'}}>
            <img src={reactImage} style={{width: '150px', height: '150px'}} alt='React' />
            <p style={{paddingTop: '4%', paddingBottom: '4%'}}>
            {t('carousel.react')}
            </p>
          </div>
          <div className='Type' style={{paddingBottom:'5%'}}>
            <img src={typeImage} style={{width: '150px', height: '150px'}} alt='TypeScript' />
            <p style={{paddingTop: '4%', paddingBottom: '4%'}}>
            {t('carousel.typescript')}
            </p>
          </div>
          <div className='JS' style={{paddingBottom:'8%'}}>
            <img src={jsImage} style={{width: '150px', height: '150px'}} alt='TypeScript' />
            <p style={{marginTop: '2%', marginBottom: '2%'}}>
            {t('carousel.javascript')}
            </p>
          </div>
          <div className='Illu' style={{paddingBottom:'8%'}}>
            <img src={illuImage} style={{width: '150px', height: '150px'}} alt='TypeScript' />
            <p style={{marginTop: '2%', marginBottom: '2%'}}>
            {t('carousel.illustrator')}
            </p>
          </div>
          <div className='Photo' style={{paddingBottom:'8%'}}>
            <img src={photoImage} style={{width: '150px', height: '150px'}} alt='TypeScript' />
            <p style={{marginTop: '2%', marginBottom: '2%'}}>
            {t('carousel.photoshop')}
            </p>
          </div>
          <div className='Figma' style={{paddingBottom:'8%'}}>
            <img src={figmaImage} style={{width: '150px', height: '150px'}} alt='TypeScript' />
            <p style={{marginTop: '2%', marginBottom: '2%'}}>
            {t('carousel.figma')}
            </p>
          </div>
        </Carousel>
      </div>
    </S.Container>
  );
};

export default RightCard;
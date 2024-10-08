import { useState} from 'react';
import { Carousel,  ConfigProvider } from 'antd';
import s from './CardHouse.module.css';
import Button from "../reusable-button/ReusableButton";
import { cardData } from '../../constants';

export default function CardHouse() {
  const [currentSlide, setCurrentSlide] = useState(0);

 

  const handleBeforeChange = (to: number) => {
    setCurrentSlide(to);
  };

  return (
    <ConfigProvider 
    theme={{
      components: {
        Carousel: {
          arrowSize: 50,
          arrowOffset: 10,
          dotWidth: 50,
        }
      }
    }}
    >
<div className={s.main_wrapper}>
      <header className={s.header}>
        <h2>Проект дома: {cardData[currentSlide].name}</h2>
        <Button buttonText='Подробнее' onClick={() => {}}/>
      </header>
      <main className={s.main}>
        <div className={s.carusel}>
          <Carousel
            arrows
            infinite
            
            beforeChange={handleBeforeChange}
          >
            {cardData.map((item, index) => (
              <div key={index} className={s.image_container}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={s.info}>
          <div>
            <img src="../public/Size.svg" alt="" />
            <p>Габариты</p>
            <span>{cardData[currentSlide].size}</span>
          </div>
          <div>
            <img src="../public/Space.svg" alt="" style={{ padding: '0 15px' }} />
            <p>Площадь</p>
            <span>{cardData[currentSlide].space} м2</span>
          </div>
          <div>
            <img src="../public/Comfort.svg" alt="" style={{ padding: '0 15px' }} />
            <p>Комфорт</p>
            <span>{cardData[currentSlide].comfort}</span>
          </div>
        </div>
      </main>
      <footer className={s.footer}>
        <div>
          <p>Каркасная технология</p>
          <p>{cardData[currentSlide].karkasPrice} ₽</p>
        </div>
        <div style={{ borderRight: '1px solid gray', height: '50px', }}></div>
        <div>
          <p>Из монолита</p>
          <p>{cardData[currentSlide].monolitPrice} ₽</p>
        </div>
        <div style={{ borderRight: '1px solid gray', height: '50px',  }}></div>
        <div>
          <p>Сделано</p>
          <img src="../public/Logo.svg" alt="" />
        </div>
      </footer>
    </div>
    </ConfigProvider>
  )
}
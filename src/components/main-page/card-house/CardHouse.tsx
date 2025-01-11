import { useState} from 'react';
import { Carousel,  ConfigProvider } from 'antd';
import s from './CardHouse.module.css';
import Button from "../../reusable-button/ReusableButton";
import { cardData } from '../../../constants';
import { House, Ruler, Sofa } from 'lucide-react';



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
        <Button buttonText='Подробнее' onClick={()=> {}}/>
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
          <div className={s.info_block}>
            <div>
            <House />
            <p>Габариты</p>
            </div>
           <div>
           <span>{cardData[currentSlide].size}</span>
           </div>
            
          </div>
          <div className={s.info_block}>
            <div>
            <Ruler />
            <p>Площадь</p>
            </div>
           <div>
           <span>{cardData[currentSlide].space} м2</span>
           </div>
            
          </div>
          <div className={s.info_block}>
            <div>
            <Sofa />
            <p>Комфорт</p>
            </div>
           <div>
           <span>{cardData[currentSlide].comfort}</span>
           </div>
            
          </div>
        </div>
      </main>
      <footer className={s.footer}>
        <div className={s.footer_item}>
          <p>Каркасная технология</p>
          <div>
          <p className={s.price}>{cardData[currentSlide].karkasPrice} ₽</p>
          </div>
          
        </div>
        <div  className={s.border}></div>
        <div  className={s.footer_item}>
          <p>Из монолита</p>
          <div>
          <p className={s.price}>{cardData[currentSlide].monolitPrice} ₽</p>
          </div>
          
        </div>
        <div className={s.border}></div>
        <div  className={s.footer_item}>
          <p>Сделано</p>
          <img src="/Logo.svg" alt="" />
        </div>
      </footer>
    </div>
    </ConfigProvider>
  )
}
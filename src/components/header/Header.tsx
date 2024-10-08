import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './Header.module.css';

export default function Header() {
  const isMobile = useMediaQuery({query: '(max-width: 970px)'});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "Проекты", "Индивидуальные решения", "Монтажные фасады под ключ",
    "Строительство", "Услуги", "О нас"
  ];

  if (isMobile) {
    return (
      <div className={s.mobileHeader}>
        <button className={s.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? 'Закрыть' : 'Меню'}
        </button>
        <div className={`${s.mobileMenu} ${isMenuOpen ? s.open : ''}`}>
          <ul className={s.mobileList}>
            {menuItems.map((item, index) => (
              <li key={index}><a href="">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={s.header}>
      <ul className={s.list}>
        {menuItems.map((item, index) => (
          <li key={index}><a href="">{item}</a></li>
        ))}
      </ul>
    </div>
  );
}
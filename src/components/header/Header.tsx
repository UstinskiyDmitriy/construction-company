import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './Header.module.css';

export default function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 970px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "Проекты", "Индивидуальные решения", "Монтажные фасады под ключ",
    "Строительство", "Услуги", "О нас"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  if (isMobile) {
    return (
      <div className={s.mobileHeader}>
        <button
          ref={menuButtonRef}
          className={s.menuButton}
          onClick={toggleMenu}
        >
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
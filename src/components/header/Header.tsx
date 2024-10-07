import s from './Header.module.css'
export default function Header() {
  return (
    <div className={s.header}>
      <ul className={s.list}>
        <a href=""><li>Проекты</li></a>
        <a href=""><li>Индивидуальные решения</li></a>
        <a href=""><li>Монтажные фасады под ключ</li></a>
        <a href=""><li>Строительство</li></a>
        <a href=""><li>Услуги</li></a>
        <a href=""><li>О нас</li></a>
      </ul>
    </div>
  )
}

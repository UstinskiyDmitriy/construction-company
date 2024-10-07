import s from './Contacts.module.css'
export default function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.phone}><a href="tel:+79788869403" type='phone'><img src="../src/public/telephone.svg" alt="" /> 8(978-88-69-403)</a></div>
      <div className={s.email}><a href="mailto:ustinskiy.dmitriy1997@yandex.ru" type='email'><img src="../src/public/email.svg" alt="" />ustinskiy.andrei@yandex.ru</a></div>
      <div className={s.links}>
        <a href=""><img src="../src/public/VK.svg" alt="" /></a>
        <a href=""><img src="../src/public/Dzen.svg" alt="" /></a>
        <a href=""><img src="../src/public/WhatsApp.svg" alt="" /></a>
        <a href=""><img src="../src/public/Telegram.svg" alt="" /></a>
        </div>
      </div>
  )
}

import s from './Contacts.module.css'
export default function Contacts() {


return (
  <div className={s.contacts}>
    <div className={s.phone}><a href="tel:+79788869403" type='phone'><img src="/telephone.svg" alt="" /> 8(978-88-69-403)</a></div>
    <div className={s.email}><a href="mailto:ustinskiy.dmitriy1997@yandex.ru" type='email'><img src="/email.svg" alt="" />ustinskiy.andrei@yandex.ru</a></div>
    <div className={s.links}>
      <a href=""><img src="/VK.svg" alt="" /></a>
      <a href=""><img src="/Dzen.svg" alt="" /></a>
      <a href=""><img src="/WhatsApp.svg" alt="" /></a>
      <a href=""><img src="/Telegram.svg" alt="" /></a>
      </div>
    </div>
)
}

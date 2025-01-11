import Button from '../../reusable-button/ReusableButton'
import Header from "../../header/Header";
import CardHouse from "../card-house/CardHouse";
import WelcomePage from "../welcone-page/WelcomePage";
import s from "./App.module.css";
import Contacts from '../../contacts/Contacts';
import RequestForm from '../../request-form/RequestForm';

export default function MainPage() {
  return (
    <div className={s.main}>
      <Header />
      <div className={s.contacts}></div>
      <div className={s.welcome_page}>
        <WelcomePage />
      </div>

      <div className={s.card_house}>
        <CardHouse />
        <Button
          buttonText="Смотреть весь каталог"
          onClick={() => {}}
        />
      </div>
      <RequestForm />
      <footer className={s.footer}>
        <Contacts />
      </footer>
    </div>
  );
}

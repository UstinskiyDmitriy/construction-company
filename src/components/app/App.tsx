import CardHouse from "../card-house/CardHouse";
import Button from "../reusable-button/ReusableButton";

import Contacts from "../contacts/Contacts";
import Header from "../header/Header";
import RequestForm from "../request-form/RequestForm";
import WelcomePage from "../welcone-page/WelcomePage";
import s from "./App.module.css";

export default function App() {
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
          width={55}
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

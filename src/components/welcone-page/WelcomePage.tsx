// WelcomePage.js
import { useState } from "react";
import s from "./WelcomePage.module.css";
import ReusableButton from "../reusable-button/ReusableButton";

import FormContacts from "../form-contacts/FormContacts";
import ModalComponent from "../modal/ModalComponent";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <section className={s.section}>
        <div className={s.description}>
          <h1>
            Профессиональные услуги строительной компании по умеренной цене
          </h1>
          <p>
            Поставки напрямую с заводов-изготовителей и большой объем закупок
            обеспечивают оптовые цены и позволяют вам значительно сэкономить на
            строительных материалах.
          </p>
          <ReusableButton buttonText="Заказать звонок" onClick={openModal} width={100} />
        </div>
        <div>
          <img src="../public/house.png" alt="house" />
        </div>
      </section>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        <FormContacts formTitle={'Позвоните профессионалам'} formText={''} imageUrl={''} closeModal={closeModal}/>
      </ModalComponent>
    </div>
  );
}

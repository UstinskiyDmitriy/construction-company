import React, { ChangeEvent, useEffect } from "react";
import ReusableButton from "../reusable-button/ReusableButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { updateField, resetForm, sendFormData } from "../../slices/formSlice";
import s from "./FormContacts.module.css";

interface TFormContacts {
  formTitle: string;
  formText: string;
  imageUrl: string;
  closeModal: () => void;
}

export default function FormContacts({
  formTitle,
  formText,
  imageUrl,
  closeModal,
}: TFormContacts) {
  const dispatch = useDispatch<AppDispatch>();

  // Выбираем данные из состояния
  const formData = useSelector((state: RootState) => state.form);
  const { userName, email, phone, question, isFormSubmitted, isLoading, error } = formData;

  // Обрабатываем изменения полей
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof typeof formData, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Отправляем данные через Redux Thunk
    dispatch(sendFormData({ userName, email, phone, question }))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          closeModal();
        }, 1000);
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });

    // Сбрасываем форму после отправки
    dispatch(resetForm());
  };

  // Показываем сообщение об успехе на 1 секунду
  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        dispatch(resetForm());
      }, 1000);
    }
  }, [isFormSubmitted, dispatch]);

  return (
    <div className={s.main}>
      <div>
        <img src={`${imageUrl}`} alt="" />
      </div>
      <div className={s.form_wrapper}>
        <form action="submit" className={s.form} onSubmit={handleSubmit}>
          <h2>{formTitle}</h2>
          <p>{formText}</p>
          <label htmlFor="userName">
            Введите ваше имя
            <input
              type="text"
              name="userName"
              required={true}
              value={userName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Введите ваш email
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone">
            Введите номер телефона
            <input
              type="text"
              name="phone"
              required
              value={phone}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="question">
            Задайте нам вопрос
            <input
              type="text"
              name="question"
              value={question}
              onChange={handleChange}
            />
          </label>

          <ReusableButton buttonText="Отправить" width={100} onClick={() => {}} />

          {isLoading && <p>Отправка данных...</p>}
          {isFormSubmitted && <p className={s.successMessage}>Форма отправлена!</p>}
          {error && <p className={s.errorMessage}>Ошибка: {error}</p>}
        </form>
      </div>
    </div>
  );
}
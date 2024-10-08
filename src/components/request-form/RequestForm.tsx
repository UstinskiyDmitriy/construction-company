import s from './RequestForm.module.css'
import FormContacts from '../form-contacts/FormContacts';
export default function RequestForm() {

  return (
    <div className={s.main}>
      <img src={'./helmet.png'} alt="" />
      <div className={s.form_wrapper}>
        <FormContacts 
          formText={`Задайте нам интересующий вас вопрос - наши архитекторы ответят вам`}
          formTitle={'Мы готовы воплотить вашу идею в жизнь'}
          imageUrl={'/helmet.png'} 
          closeModal={() => {}}        
        />
      </div>
    </div>
  )
}

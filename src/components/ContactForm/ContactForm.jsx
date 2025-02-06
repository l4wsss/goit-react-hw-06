import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const nameRegExp = /^[a-zA-Zа-яА-ЯёЁїЇіІєЄ' ]+$/;

  const phoneRegExp = /^((\+?\d{1,4})|(\(\d{1,4}\)))?\s?\d{3,4}?\s?\d{3,4}$/;

  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRegExp, "Ім'я повинно містити лише літери")
      .min(3)
      .max(50)
      .required("Поле обов'язкове"),
    number: Yup.string()
      .matches(phoneRegExp, "Номер телефону має бути у вірному форматі")
      .min(10)
      .max(14)
      .required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        number: "",
      }}
    >
      <Form className={s.container}>
        <label className={s.containerLabel}>
          Name
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage name="name" className={s.error} component="span" />
        </label>
        <label className={s.containerLabel}>
          Number
          <Field className={s.input} type="string" name="number" />
          <ErrorMessage name="number" className={s.error} component="span" />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

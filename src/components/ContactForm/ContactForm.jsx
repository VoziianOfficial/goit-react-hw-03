import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  // Схема валідації полів
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={s.contactForm}>
          <p className={s.p}>Name</p>
          <Field className={s.formInput} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            className={s.errorMessage}
          />

          <p className={s.p}>Number</p>
          <Field className={s.formInput} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={s.errorMessage}
          />

          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

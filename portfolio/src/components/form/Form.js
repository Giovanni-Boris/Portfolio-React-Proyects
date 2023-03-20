import React from "react";
import "./form.css";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  if (!form.name.trim()) {
    errors.name = "El campo Nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }
  if (!form.email.trim()) {
    errors.email = "El campo Email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }
  if (!form.subject.trim()) {
    errors.subject = "El campo Asunto a tratar es requerido";
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo Comentario es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe acceder los 255 caracteres";
  }
  return errors;
};
let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const Form = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="comments"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

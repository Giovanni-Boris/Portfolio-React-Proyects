import React from "react";
import "./form.css";
import { useForm } from "../../hooks/useForm";
import Loader from "../loader/Loader";
import Message from "../Message";

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
    errors.name = "The Name field is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The 'Name' field only accepts letters and whitespace";
  }
  if (!form.email.trim()) {
    errors.email = "The Email field is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The 'Email' field is incorrect";
  }
  if (!form.subject.trim()) {
    errors.subject = "The Subject field is required";
  }
  if (!form.comments.trim()) {
    errors.comments = "The Comment field is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "The 'Comments' field must not exceed 255 characters";
  }
  return errors;
};
let styles = {
  fontWeight: "400",
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
        {errors.name && <p style={styles}>{errors.name}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
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
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <button className="btn" type="submit">
          {loading ? <Loader /> : "Submit"}
        </button>
        {response && <Message msg="The data has been sent" bgColor="#f12e31" />}
      </form>
    </div>
  );
};

export default Form;

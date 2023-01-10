import styled from "styled-components";
import { Formik } from "formik";
import { useState } from "react";

const FormStyled = styled.form`
  width: 70%;
  height: 60rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  background-color: #4e4e4e8b;
  color: white;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
  }

  label {
    font-size: 2rem;
    display: block;
    margin-bottom: 2rem;
  }

  input {
    width: 20rem;
    height: 3rem;
  }

  button {
    width: 20rem;
    height: 4rem;
  }

  p {
    color: #ff7a7a;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

const ContactForm = () => {
  const [myForm, setMyForm] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        coments: "",
      }}
      validate={(values) => {
        let errors = {};

        //name validation
        if (!values.name) {
          errors.name = "Por favor ingresa un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          errors.name = "You name only can take letters and spaces";
        }

        //email validation
        if (!values.email) {
          errors.email = "Please write your email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email = "The email only has @ and letters";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        setMyForm(true);
        setTimeout(() => setMyForm(false), 5000);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        handleBlur,
        errors,
        touched,
      }) => (
        <FormStyled onSubmit={handleSubmit}>
          <h2>Contact me!</h2>
          <div>
            <label htmlFor="name">Name and surname</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Johan Hertz"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.name && errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="coments">Coments</label>
            <textarea
              name="coments"
              cols="30"
              rows="10"
              id="coments"
              type="text"
              placeholder="Hello i am... "
              value={values.coments}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
            {myForm && <p>"Succes" your form has been send</p>}
          </div>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;

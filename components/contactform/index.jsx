import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './contactform.module.scss';

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const { register, handleSubmit, errors } = useForm();

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async ({}, e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/sendgrid/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      {/* TODO - add fontawesome icons to alerts */}
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger">
          <h4 className="alert-heading">Holy guacamole!</h4>
          <p>You should check in on some of those fields below.</p>
        </div>
      )}
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">
          <h4 className="alert-heading">Eureka!</h4>
          <hr />
          <p>{status.info.msg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
        <div className="form__item">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            aria-describedby="Name Help"
            className={`form__input ${
              errors.email ? 'form__input__error' : ''
            }`}
            id="name"
            name="name"
            onChange={handleOnChange}
            placeholder="Enter name"
            ref={register({ required: 'Please enter your name' })}
            type="text"
            value={inputs.name}
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}
        </div>
        <div className="form__item">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            aria-describedby="Email Help"
            className={`form__input ${
              errors.email ? 'form__input__error' : ''
            }`}
            id="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Enter email"
            ref={register({
              required: 'Please enter your email address',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            type="email"
            value={inputs.email}
          />
          {errors.email && (
            <span className="form__error">{errors.email.message}</span>
          )}
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form__item">
          <label htmlFor="message" className="form__label">
            Message
          </label>
          <textarea
            aria-describedby="Message Help text"
            className={`form__input form__area ${
              errors.message ? 'form__input__error' : ''
            }`}
            id="message"
            name="message"
            onChange={handleOnChange}
            placeholder="Enter your message"
            ref={register({ required: 'Please enter your message' })}
            rows="6"
            type="text"
            value={inputs.message}
          ></textarea>
          {errors.message && (
            <span className="form__error">{errors.message.message}</span>
          )}
        </div>
        <div className="form__item">
          <button
            type="submit"
            className="form__btn"
            disabled={status.submitting}
          >
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : '<i className="fas fa-sync fa-spin"></i> Submitting...'}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

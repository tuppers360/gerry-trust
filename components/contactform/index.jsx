import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './contactform.module.scss';

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
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
        <div className={styles.form_item}>
          <label htmlFor="name" className={styles.form_label}>
            Name
          </label>
          <input
            aria-describedby="Name Help"
            className={`${styles.form_input} ${styles.text_input} ${
              errors.email ? `${styles.form_input_error}` : ''
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
            <span className={styles.form_error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.form_item}>
          <label htmlFor="email" className={styles.form_label}>
            Email address
          </label>
          <input
            aria-describedby="Email Help"
            className={`${styles.form_input} ${styles.text_input} ${
              errors.email ? `${styles.form_input_error}` : ''
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
            <span className={styles.form_error}>{errors.email.message}</span>
          )}
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className={styles.form_item}>
          <label htmlFor="message" className={styles.form_label}>
            Message
          </label>
          <textarea
            aria-describedby="Message Help text"
            className={`${styles.form_input} ${styles.text_input} ${
              styles.form_area
            } ${errors.message ? `${styles.form_input_error}` : ''}`}
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
            <span className={styles.form_error}>{errors.message.message}</span>
          )}
        </div>
        <div className={styles.form_item}>
          <button
            type="submit"
            className={styles.form_btn}
            disabled={status.submitting}
          >
            {!status.submitting ? (
              !status.submitted ? (
                'Submit'
              ) : (
                'Submitted'
              )
            ) : (
              <span>
                <i className="fas fa-sync fa-spin"></i> Submitting...
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ApplicationForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    address: '',
    postCode: '',
    application: '',
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
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        postCode: '',
        application: '',
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
    const res = await fetch('/api/sendgrid/application', {
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
    <React.Fragment>
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
        <div className="form_item">
          <label htmlFor="firstName" className="form_label">
            First Name
          </label>
          <input
            aria-describedby="Name Help"
            className={`form_input text_input ${
              errors.firstName ? `form_input_error` : ''
            }`}
            id="firstName"
            name="firstName"
            onChange={handleOnChange}
            placeholder="Enter name"
            ref={register({ required: 'Please enter your first name' })}
            type="text"
            value={inputs.firstName}
          />
          {errors.firstName && (
            <span className="form_error">{errors.firstName.message}</span>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="lastName" className="form_label">
            Last Name
          </label>
          <input
            aria-describedby="Name Help"
            className={`form_input text_input ${
              errors.lastName ? `form_input_error` : ''
            }`}
            id="lastName"
            name="lastName"
            onChange={handleOnChange}
            placeholder="Enter name"
            ref={register({ required: 'Please enter your last name' })}
            type="text"
            value={inputs.lastName}
          />
          {errors.lastName && (
            <span className="form_error">{errors.lastName.message}</span>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="dateOfBirth" className="form_label">
            Date of Birth
          </label>
          <input
            aria-describedby="Date Of Birth"
            className={`form_input text_input ${
              errors.dateOfBirth ? `form_input_error` : ''
            }`}
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={handleOnChange}
            placeholder="Enter name"
            ref={register({
              required: 'Please enter date of birth',
              pattern: {
                value: /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/,
                message: 'Please enter your date of birth format dd/mm/yyyy',
              },
            })}
            type="text"
            value={inputs.dateOfBirth}
          />
          {errors.dateOfBirth && (
            <span className="form_error">{errors.dateOfBirth.message}</span>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="email" className="form_label">
            Email address
          </label>
          <input
            aria-describedby="Email Help"
            className={`form_input text_input ${
              errors.email ? `form_input_error` : ''
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
            <span className="form_error">{errors.email.message}</span>
          )}
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form_item">
          <label htmlFor="address" className="form_label">
            Address
          </label>
          <input
            aria-describedby="Address"
            className={`form_input text_input ${
              errors.address ? `form_input_error` : ''
            }`}
            id="address"
            name="address"
            onChange={handleOnChange}
            placeholder="Address"
            ref={register({ required: 'Please enter your address' })}
            type="text"
            value={inputs.address}
          />
          {errors.address && (
            <span className="form_error">{errors.address.message}</span>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="postCode" className="form_label">
            Post Code
          </label>
          <input
            aria-describedby="Post Code"
            className={`form_input text_input ${
              errors.postCode ? `form_input_error` : ''
            }`}
            id="postCode"
            name="postCode"
            onChange={handleOnChange}
            placeholder="Post Code"
            ref={register({ required: 'Please enter your post code' })}
            type="text"
            value={inputs.postCode}
          />
          {errors.postCode && (
            <span className="form_error">{errors.postCode.message}</span>
          )}
        </div>
        <div className="form_item">
          <label htmlFor="application" className="form_label">
            Please provide us with as much information about your as possible
            such as how will this funding make a difference? Who will benefit?
          </label>
          <textarea
            aria-describedby="Application Help text"
            className={`form_input text_input form_area ${
              errors.application ? `form_input_error` : ''
            }`}
            id="application"
            name="application"
            onChange={handleOnChange}
            placeholder="Enter your message"
            ref={register({ required: 'Please enter your application' })}
            rows="6"
            type="text"
            value={inputs.application}
          ></textarea>
          {errors.application && (
            <span className="form_error">{errors.application.application}</span>
          )}
        </div>
        <div className="form_item">
          <button
            type="submit"
            className="form_btn btn btn_depth btn_success"
            disabled={status.submitting}
          >
            {!status.submitting ? (
              !status.submitted ? (
                <div>
                  <span className="icon_margin_right">Submit Application</span>
                  <FontAwesomeIcon icon="paper-plane" />
                </div>
              ) : (
                'Application Sent'
              )
            ) : (
              <div>
                <span className="icon_margin_left">
                  <FontAwesomeIcon icon="sync" spin />
                </span>
                Submitting...
              </div>
            )}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ApplicationForm;

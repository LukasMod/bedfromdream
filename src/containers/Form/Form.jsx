import React, { useState } from 'react';
import './style.scss';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [params, setParams] = useState({
    name: '',
    street: '',
    city: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    street: '',
    city: '',
    phone: '',
    email: '',
  });

  const history = useHistory();

  const handleClickCancel = () => {
    history.push('/cart');
  };

  const isFormValid = () => {
    const { name, street, city, phone, email } = params;
    if (
      (phone.length === 0 || phone.length === 9) &&
      name &&
      street &&
      city &&
      email
    ) {
      const noErrors = Object.values(errors).every((x) => x === '');
      return noErrors;
    }
  };

  const resetForm = () => {
    setParams({ name: '', street: '', city: '', phone: '', email: '' });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      resetForm();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const validateEmail = (email) => {
    var emailSchema = /\S+@\S+\.\S+/;
    return emailSchema.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (value.length < 3) {
        setErrors({ ...params, [name]: 'Name is required. Too short' });
        return false;
      }
    } else if (name === 'street') {
      if (!value.length > 0) {
        setErrors({ ...errors, [name]: 'Street is required' });
        return false;
      }
    } else if (name === 'city') {
      if (!value.length > 0) {
        setErrors({ ...errors, [name]: 'City is required' });
        return false;
      }
    } else if (name === 'phone') {
      if (value.length !== 0 && value.length !== 9) {
        setErrors({ ...errors, [name]: 'Optional. Must be 9 numbers' });
        return false;
      }
    } else if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors({ ...errors, [name]: 'Email is required. abc@abc.abc' });
        return false;
      }
    } else {
      return false;
    }
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <div className="Form">
      <div className="Form__wrapper">
        <h1 className="Form__title">Payment form</h1>
        <p className="Form__paragraph">Please fill in the fields below.</p>
        <form
          noValidate
          validate="false"
          onSubmit={handleForm}
          className="Form__form">
          <div className="Form__row-wrapper">
            <div className="Form__row">
              <label className="Form__label" htmlFor="name">
                Name
              </label>
              <input
                className="Form__input"
                type="text"
                name="name"
                id="name"
                value={params.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
              />
            </div>
            {errors.name.length > 0 && (
              <span className="Form__error">{errors.name}</span>
            )}
          </div>
          <div className="Form__row-wrapper">
            <div className="Form__row">
              <label className="Form__label" htmlFor="street">
                Street
              </label>
              <input
                className="Form__input"
                type="text"
                name="street"
                id="street"
                value={params.street}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Mickiewicza 48/50"
              />
            </div>
            {errors.street.length > 0 && (
              <span className="Form__error">{errors.street}</span>
            )}
          </div>
          <div className="Form__row-wrapper">
            <div className="Form__row">
              <label className="Form__label" htmlFor="city">
                City
              </label>
              <input
                className="Form__input"
                type="text"
                name="city"
                id="city"
                value={params.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Warszawa"
              />
            </div>
            {errors.city.length > 0 && (
              <span className="Form__error">{errors.city}</span>
            )}
          </div>
          <div className="Form__row-wrapper">
            <div className="Form__row">
              <label className="Form__label" htmlFor="phone">
                Phone
              </label>
              <input
                className="Form__input"
                type="number"
                name="phone"
                id="phone"
                value={params.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="123456789"
              />
            </div>
            {errors.phone.length > 0 && (
              <span className="Form__error">{errors.phone}</span>
            )}
          </div>
          <div className="Form__row-wrapper">
            <div className="Form__row">
              <label className="Form__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="Form__input"
                type="email"
                name="email"
                id="email"
                value={params.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="kowalsky@gmail.com"
              />
            </div>
            {errors.email.length > 0 && (
              <span className="Form__error">{errors.email}</span>
            )}
          </div>
          <div className="Form__Button">
            <Button
              onClick={handleClickCancel}
              text="Cancel"
              styleName="light"
              type="button"
            />
            <Button text="Process" styleName="light" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

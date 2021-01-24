import React, { useState } from 'react';
import './style.scss';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleClickCancel = () => {
    history.push('/cart');
  };

  const handleForm = () => {
    console.log('submit form');
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
          <div className="Form__row">
            <label className="Form__label" htmlFor="name">
              Name
            </label>
            <input
              className="Form__input"
              type="text"
              name="name"
              id="name"
              // value={params.title}
              // onChange={this.handleChange}
              // onBlur={this.handleBlur}
              placeholder="Name"
            />
          </div>
          <div className="Form__row">
            <label className="Form__label" htmlFor="address street">
              Street
            </label>
            <input
              className="Form__input"
              type="text"
              name="address street"
              id="address street"
              // value={params.title}
              // onChange={this.handleChange}
              // onBlur={this.handleBlur}
              placeholder="Mickiewicza 48/50"
            />
          </div>
          <div className="Form__row">
            <label className="Form__label" htmlFor="address city">
              City
            </label>
            <input
              className="Form__input"
              type="text"
              name="address city"
              id="address city"
              // value={params.title}
              // onChange={this.handleChange}
              // onBlur={this.handleBlur}
              placeholder="Warszawa"
            />
          </div>
          <div className="Form__row">
            <label className="Form__label" htmlFor="phone">
              Phone
            </label>
            <input
              className="Form__input"
              type="number"
              name="phone"
              id="phone"
              // value={params.title}
              // onChange={this.handleChange}
              // onBlur={this.handleBlur}
              placeholder="123456789"
            />
          </div>
          <div className="Form__row">
            <label className="Form__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="Form__input"
              type="email"
              name="email"
              id="email"
              // value={params.title}
              // onChange={this.handleChange}
              // onBlur={this.handleBlur}
              placeholder="kowalsky@gmail.com"
            />
          </div>

          {/* {errors.name.length > 0 && (
              <span className="Form__error">{errors.name}</span>
            )} */}
          <div className="Form__Button">
            <Button
              onClick={handleClickCancel}
              text="Cancel"
              styleName="light"
            />
            <Button
              onClick={handleClick}
              text="Process"
              styleName="light"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

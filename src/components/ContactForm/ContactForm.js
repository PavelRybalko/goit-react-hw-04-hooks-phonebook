import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

// const INITIAL_STATE = { name: "", number: "" };

export default function ContactForm({ onSubmit, onCheckUnique }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается!`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isValidatedForm = validateForm();
    if (!isValidatedForm) return;
    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some fields are empty! Please write something');
      return;
    }

    return onCheckUnique(name);
  };

  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <form className={s.ContactForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            autoComplete="off"
            className={s.input}
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            autoComplete="off"
            className={s.input}
            name="number"
            type="tel"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
};

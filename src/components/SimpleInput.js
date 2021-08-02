import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    console.log('isValid');
    formIsValid = true;
  }

  const onBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const onChangeInputHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onBlurEmailHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    setName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const inputClasses =
    !enteredNameIsValid && enteredNameTouched
      ? 'form-control invalid'
      : 'form-control';
  const emailClasses =
    !enteredEmailIsValid && enteredEmailTouched
      ? 'form-control invalid'
      : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={onChangeInputHandler}
          onBlur={onBlurHandler}
        />
      </div>
      {!enteredNameIsValid && enteredNameTouched && (
        <p>Please entered a valid value</p>
      )}
      <div className={emailClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
      </div>
      {!enteredEmailIsValid && enteredEmailTouched && (
        <p>Please entered a valid value</p>
      )}
      <div className='form-actions'>
        <button type='button' disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;

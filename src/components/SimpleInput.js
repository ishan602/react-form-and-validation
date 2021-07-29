import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';

  const onBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const onChangeInputHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    setName('');
    setEnteredNameTouched(false);
  };

  const inputClasses =
    !enteredNameIsValid && enteredNameTouched
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
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

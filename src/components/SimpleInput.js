import InputHook from '../hooks/input-hook';

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    isTouched: enteredNameTouched,
    enteredValueIsValid: enteredNameIsValid,
    onChangeHandler: onChangeInputHandler,
    onBlurHandler: onBlurInputHandler,
    resetInput: resetInputHandler,
  } = InputHook((value) => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    isTouched: enteredEmailTouched,
    enteredValueIsValid: enteredEmailIsValid,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    resetInput: resetEmailHandler,
  } = InputHook((value) => value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    resetInputHandler();
    resetEmailHandler();
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
          onBlur={onBlurInputHandler}
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
        <button type='submit' disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;

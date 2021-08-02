import { useState } from 'react';

const InputHook = (validateFun) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateFun(enteredValue);

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const resetInput = () => {
    setEnteredValue('');
    setIsTouched(false);
  };
  return {
    enteredValue,
    isTouched,
    enteredValueIsValid,
    onChangeHandler,
    onBlurHandler,
    resetInput,
  };
};

export default InputHook;

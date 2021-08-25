import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import './style.scss';

const AMOUNT_REGULAR_EXPRESSION = /^(\d{0,13})([.,]\d{0,4})?$/;

const isAmountValid = (number) => AMOUNT_REGULAR_EXPRESSION.test(number);

export default function Currency(props) {
  const nameRef = useRef(null);
  const amountRef = useRef(null);

  if (nameRef.current && amountRef.current) {
    nameRef.current.value = props.name;
    amountRef.current.value = props.amount;
  }

  const handleAmountInput = (evt) => {
    const value = evt.target.value;

    if (isAmountValid(value)) {
      props.onAmountInput(value);
    }
  }

  const handleNameChange = (evt) => {
    const value = evt.target.value;

    props.onNameChange(value);
  }

  return (
    <fieldset className={`currency ${props.parentName}__currency ${props.parentName}__currency--${props.postfix}`} disabled={props.isDisabled}>
      <legend className='currency__title'>{props.title}</legend>
      <p className='currency__wrapper currency__wrapper--amount'>
        <label className='visually-hidden' htmlFor={`value-${props.postfixe}`}>{props.amountLable}</label>
        <input className='currency__amount' ref={amountRef} onInput={handleAmountInput} type='text' name={`value-${props.postfixe}`} id={`value-${props.postfixe}`} pattern='^(\d{0,13})([.,]\d{0,4})?$' value={`${props.amount}`} required />
      </p>
      <p className='currency__wrapper'>
        <label className='currency__name-label'>
          <select className='currency__name' ref={nameRef} onChange={handleNameChange} name={`currency-${props.postfixe}`} value={`${props.name}`} required>
            <option value='RUB'>RUB</option>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            <option value='CNY'>CNY</option>
          </select>
        </label>
      </p>
    </fieldset>
  )
}

Currency.propTypes = {
  parentName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postfix: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountLable: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onAmountInput: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
}

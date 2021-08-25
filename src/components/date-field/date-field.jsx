import PropTypes from 'prop-types';
import React from 'react';
import { formateDateToDefault } from '../../utils';
import './style.scss';

const DATE_RANGE = 7;
const MS_PER_DAY = 86400000;

const getMinDate = (date) => {
  const result = new Date(date.getTime() - (MS_PER_DAY * DATE_RANGE));
  return result;
}

export default function DateField(props) {
  const currentDate = new Date();
  const maxDate = formateDateToDefault(currentDate);
  const minDate = formateDateToDefault(getMinDate(currentDate));

  const handleDateChange = (evt) => {
    const date = evt.target.value;
    props.onDateChange(date);
  }

  return (
    <p className={`date-field ${props.parentName}__date-field`}>
      <label className='visually-hidden' htmlFor='date'>Выберите дету курса</label>
      <input className='date-field__date-picker' onChange={handleDateChange} type="date" name='date' id='date' min={minDate} max={maxDate} value={props.date} disabled={props.isDisabled} required />
    </p>
  );
}

DateField.propTypes = {
  parentName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onDateChange: PropTypes.func.isRequired,
}


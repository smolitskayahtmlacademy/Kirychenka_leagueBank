import { reverseNumber, replaceComma, replaceDot, formateDateToDefault } from '../../utils';
import React, { useState } from 'react';
import Currency from '../currency/currency';
import DateField from '../date-field/date-field';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addHistory } from '../../store/action';
import { api } from '../../api';


const NUMBER_COUNT_AFTER_DOT = 4;

const DEFAULT_FIRST_NAME = 'RUB';
const DEFAULT_SECOND_NAME = 'USD';
const DEFAULT_COURSE = 0.0131234;
const DEFAULT_FIRST_AMOUNT = '1000';
const DEFAULT_SECOND_AMOUNT = replaceDot(DEFAULT_FIRST_AMOUNT * DEFAULT_COURSE);

export default function Converter() {
  const [firstName, setFirstName] = useState(DEFAULT_FIRST_NAME);
  const [secondName, setSecondName] = useState(DEFAULT_SECOND_NAME);
  const [firstAmount, setFirstAmount] = useState(DEFAULT_FIRST_AMOUNT);
  const [secondAmount, setSecondAmount] = useState(DEFAULT_SECOND_AMOUNT);
  const [isLoaded, setIsLoaded] = useState(true);
  const [date, setDate] = useState(formateDateToDefault(new Date()));
  const [course, setCourse] = useState(DEFAULT_COURSE);

  const dispatch = useDispatch();

  const onSuccessRequest = (course) => {
    setCourse(course)
    setIsLoaded(true)
  }

  const onErrorRequest = () => {
    setIsLoaded(true);
  }

  const handleApiRequest = () => {
    if (firstName === secondName) {
      setCourse(1);
      return
    }
    if (firstName && secondName && date) {
      setIsLoaded(false)
      api(firstName, secondName, date, onSuccessRequest, onErrorRequest)
    }
  }

  const handleFirstAmountInput = (amount) => {
    const firstAmount = replaceDot(amount);
    const secondAmount = replaceDot((replaceComma(amount) * course).toFixed(NUMBER_COUNT_AFTER_DOT));

    setFirstAmount(firstAmount);
    setSecondAmount(secondAmount);
  }

  const handleSecondAmountInput = (amount) => {
    const reversedCourse = reverseNumber(course);
    const firstAmount = replaceDot((replaceComma(amount) * reversedCourse).toFixed(NUMBER_COUNT_AFTER_DOT));
    const secondAmount = replaceDot(amount);

    setSecondAmount(secondAmount);
    setFirstAmount(firstAmount);
  }

  const handleFirstNameChange = (name) => {
    setFirstName(name);
    handleApiRequest();
  }

  const handleSecondNameChange = (name) => {
    setSecondName(name);
    handleApiRequest();
  }

  const handleDateChange = (date) => {
    setDate(date);
    handleApiRequest();
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const historyItem = {
      from: {
        name: firstName,
        amount: firstAmount,
      },
      to: {
        name: secondName,
        amount: secondAmount,
      },
      date
    }

    dispatch(addHistory(historyItem))
  }

  return (
    <section className='converter'>
      <h2 className='converter__title'>Конвертер валют</h2>
      <form className='converter__form' action='/' method='post' onSubmit={handleSubmit} >
        <Currency
          parentName='converter'
          title='У меня есть'
          postfix='first'
          amount={String(firstAmount)}
          amountLable='Сумма конвертации'
          name={firstName}
          onAmountInput={handleFirstAmountInput}
          onNameChange={handleFirstNameChange}
          isDisabled={!isLoaded}
        />
        <Currency
          parentName='converter'
          title='Хочу приобрести'
          postfix='second'
          amount={String(secondAmount)}
          amountLable='Результат конвертации'
          name={secondName}
          onAmountInput={handleSecondAmountInput}
          onNameChange={handleSecondNameChange}
          isDisabled={!isLoaded}
        />
        <DateField
          parentName='converter'
          date={date}
          onDateChange={handleDateChange}
          isDisabled={!isLoaded}
        />
        <button className='converter__submit' type='submit' disabled={!isLoaded}>Сохранить результат</button>
      </form>
    </section >
  )
}

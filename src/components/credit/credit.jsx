import React from 'react';
import './style.scss';

export default function Credit() {
  return (
    <aside className='credit'>
      <div className='credit__content'>
        <h2 className='credit__title'>Кредиты на любой случай</h2>
        <p className='credit__text'>Лига Банк</p>
        <a className='credit__button' href='/'>Рассчитать кредит</a>
      </div>
    </aside>
  )
}

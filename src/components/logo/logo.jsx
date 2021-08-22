import React from 'react';
import './style.scss';

export default function Logo({ className }) {
  return (
    <a className={`logo ${className}`} href='/'>
      <img className='logo__icon' src='img/logo.svg' width='28' height='25' alt='Логотип Лига Банка' />
      <span>ЛИГА Банк</span>
    </a>
  );
}


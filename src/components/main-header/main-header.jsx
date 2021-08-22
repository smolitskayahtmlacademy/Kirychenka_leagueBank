import React from 'react';
import Logo from "../logo/logo";
import './style.scss';

export default function MainHeader() {
  return (
    <header className='main-header'>
      <nav className='main-header__navigation'>
        <Logo className='main-header__logo' />
        <ul className='main-header__navigation-list'>
          <li className='main-header__navigation-item'>
            <a className='main-header__navigation-link' href='/'>
              Услуги
            </a>
          </li>
          <li className='main-header__navigation-item'>
            <a className='main-header__navigation-link' href='/'>
              Рассчитать кредит
            </a>
          </li>
          <li className='main-header__navigation-item'>
            <a className='main-header__navigation-link' href='/'>
              Конвертер валют
            </a>
          </li>
          <li className='main-header__navigation-item'>
            <a className='main-header__navigation-link' href='/'>
              Контакты
            </a>
          </li>
          <li className='main-header__navigation-item'>
            <a className='main-header__navigation-link' href='/'>
              Задать вопрос
            </a>
          </li>
        </ul>
      </nav>
      <a className='main-header__sign-in' href='/'>Войти в Интернет-банк</a>
    </header>
  );
}

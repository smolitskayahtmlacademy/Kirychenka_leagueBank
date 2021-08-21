import React from "react";
import Logo from "../logo/logo";
import './style.scss'

export default function MainFooter() {
    return (
        <footer className='main-footer'>
          <div className='main-footer__col'>
              <Logo className='main-footer__logo'/>
              <address className='main-footer__address'>
                  150015, г. Москва, ул. Московская, д. 32<br/>
                  Генеральная лицензия Банка России №1050<br/>
                  Ⓒ Лига Банк, 2019
              </address>
          </div>
            <div className='main-footer__col'>
              <ul className='main-footer__navigation-list'>
                  <li className='main-footer__navigation-item'>
                      <a className='main-footer__navigation-link' href='/'>
                          Услуги
                      </a>
                  </li>
                  <li className='main-footer__navigation-item'>
                      <a className='main-footer__navigation-link' href='/'>
                          Рассчитать кредит
                      </a>
                  </li>
                  <li className='main-footer__navigation-item'>
                      <a className='main-footer__navigation-link' href='/'>
                          Контакты
                      </a>
                  </li>
                  <li className='main-footer__navigation-item'>
                      <a className='main-footer__navigation-link' href='/'>
                          Задать вопрос
                      </a>
                  </li>
              </ul>
            </div>
            <div className='main-footer__col'>
              <div className='main-footer__phone-container main-footer__phone-container--short'>
                  <a className='main-footer__phone' href="tel:*0904">*0904</a>
                  <p className='main-footer__phone-description'>Бесплатно для абонентов<br/>МТС, Билайн, Мегафон, Теле2</p>
              </div>
            </div>
            <div className='main-footer__col'>
                <div className='main-footer__phone-container main-footer__phone-container--long'>
                    <a className='main-footer__phone' href="tel:88001112233">8 800 111 22 33</ a>
                    <p className='main-footer__phone-description'>Бесплатный для всех<br/> городов России</p>
                </div>
            </div>
            <div className='main-footer__col'>
                  <ul className='main-footer__social'>
                      <li className='main-footer__social-item'>
                          <a className='main-footer__social-link' href='https://www.facebook.com/'>
                              <img className='main-footer__social-icon' src='img/fb.svg' width='9' height='16' alt='Facebook'/>
                          </a>
                      </li>
                      <li className='main-footer__social-item'>
                          <a className='main-footer__social-link' href='https://www.instagram.com/'>
                              <img className='main-footer__social-icon' src='img/insta.svg' width='16' height='16' alt='Twitter' />
                          </a>
                      </li>
                      <li className='main-footer__social-item'>
                          <a className='main-footer__social-link' href='https://www.twitter.com/'>
                              <img className='main-footer__social-icon' src='img/twitter.svg' width='16' height='13' alt='Instagram' />
                          </a>
                      </li>
                      <li className='main-footer__social-item'>
                          <a className='main-footer__social-link' href='https://www.youtube.com/'>
                              <img className='main-footer__social-icon' src='img/youtube.svg' width='16' height='13' alt='Youtube' />
                          </a>
                      </li>
                  </ul>
            </div>
        </footer>
    );
}

import MainHeader from '../main-header/main-header';
import MainFooter from "../main-footer/main-footer";
import Credit from '../credit/credit';
import Converter from '../converter/converter';
import './style.scss'

export default function Page() {
  return (
    <div className='page'>
      <MainHeader />
      <main>
        <h1 className='visually-hidden'>Страница конвертера валют</h1>
        <Credit></Credit>
        <Converter />
      </main>
      <MainFooter />
    </div>
  );
}

import MainHeader from '../main-header/main-header';
import MainFooter from "../main-footer/main-footer";
import './style.scss'

export default function Page() {
    return (
        <div className='page'>
            <MainHeader/>
            <MainFooter />
        </div>
);
}

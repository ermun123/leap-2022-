import logosmall from '../images/logosmall.svg'
import Dropwdown from './dropdown'
import MainButton from './MainButton'
import Profile from './profile'
import SearchIcon from './SearchIcon'
import WriteIcon from './WriteIcon'
export default function SlimNav() {
    return (
        <div className="d-flex justify-content-between py-2 px-4 slim-nav align-items-center">
            <div>
                <div className='d-flex'>
                    <img src={logosmall} alt="" className='me-3' />
                    <form className='position-relative'>
                        <input type="text" className='form-control search-input' placeholder='      Search Medium' />
                        <button className='btn search-button'>
                            <SearchIcon />
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <ul className='d-flex align-items-center slim-nav-menu'>
                    <li>
                        <a href='javascript:void(0)' className='slim-nav-link'>
                            <WriteIcon /> Write
                        </a>
                    </li>
                    <li>
                        <MainButton>Sign Up</MainButton>
                    </li>
                    <li>
                        <a href='javascript:void(0)' className='slim-nav-link'>
                            Sign in
                        </a>
                    </li>
                    <li className='d-flex align-items-center'>
                        <Profile />
                        <Dropwdown />
                    </li>

                </ul>
            </div>
        </div>
    )
}
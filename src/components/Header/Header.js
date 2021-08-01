import './Header.css';
import NavBar from './NavBar/NavBar'



const Header = props => {

    return (
        <header className='header'>
            <p>
                <img src="https://i.ibb.co/xq0sKCC/logo.png" alt="logo" />
            </p>
            <NavBar className='header-nav' />
        </header>
    )
}
export default Header;
import './Header.css';
import NavBar from './NavBar/NavBar'
import headerPic from '../../images/headerPic.png'
import Social from './Social'




const Header =() => {

    return (
        <header className='header'>
            <img className='headerPic' src={headerPic} alt="" />
            <Social />
            <NavBar className='header-nav' />
        </header>
    )
}
export default Header;
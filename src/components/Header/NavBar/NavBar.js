import { NavLink } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    
    return <nav className='navbar'>
        <li><NavLink to='/' className = 'navlink'>Начало</NavLink></li>
        <li><NavLink to='/services' className = 'navlink'>Услуги</NavLink></li>
        <li><NavLink to='/useful' className = 'navlink'>Полезни</NavLink></li>
        <li><NavLink to='/events' className = 'navlink'>Събития</NavLink></li>
        <li className= "contactButton" ><NavLink to='/contact' className = 'navlink'>Контакт</NavLink></li>
    </nav>
}
export default NavBar;
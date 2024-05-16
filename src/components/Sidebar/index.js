import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/Logo-A-nav.png'
import sub from '../../assets/images/Logo-subtitle-nav.png'

const Sidebar = () => (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={Logo} alt='Logo' />
                <img src={sub} alt='REEB' />
            </Link>

            <nav>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/about"
                    className="about-link"
                >
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/contact"
                    className="contact-link"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/muhammad-areeb-152b28231/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#68696E' />
                    </a>
                </li>
                
                <li>
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/MuhammadAreeb334"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#68696E' />
                    </a>
                </li>
            </ul>

        </div>
    )

export default Sidebar
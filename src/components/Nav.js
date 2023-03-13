import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { userContext } from '../context/UserContext';
import { themeContext } from '../context/ThemeContext';

const Nav = () => {

    const location = useLocation();
    const { user, setUser } = useContext(userContext)
    const { light, setLight } = useContext(themeContext)

  return (
    <nav>
        <div className="container">
            <div class="logo">
                <Link to="/">Logo</Link>
            </div>
            <div class="menu">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={location.pathname==='/' ? 'active' : ''}
                        >Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className = {location.pathname==='/about' ? 'active' : ''}
                        >About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className = {location.pathname==='/products' ? 'active' : ''}
                        >Products
                        </Link>    
                    </li>     
                    <li className="dropdown-content">
                        <Link to="/user">
                            { user ?
                                <span style={{color:"lightblue"}}>
                                    <LockIcon style={{fontSize:"18px",verticalAlign:"bottom"}} /> {user}
                                </span>
                                :
                                <span>
                                    <LockOpenIcon style={{fontSize:"18px",verticalAlign:"bottom"}} />
                                </span>
                            }
                        </Link>
                        { user ? "" :
                            <div className="dropdown">
                                <Link to="/user">Log In</Link>
                                <Link to="/signup">SignUp</Link>
                            </div>
                        }
                    </li>
                    <li>
                        <Link onClick={()=>setLight(prev=>!prev)}>
                            { light ? 
                                <ModeNightIcon style={{fontSize:"18px",verticalAlign:"bottom"}} />
                                :
                                <WbSunnyIcon style={{fontSize:"18px",verticalAlign:"bottom"}} />
                            }
                        </Link>
                    </li>                                                       
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Nav
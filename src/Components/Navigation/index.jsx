import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../style.module.css"

const Navigation = () => {
  return (
    <div className='container'>
        <nav className='navbarr'>
            <nav className='navbar'>
                <h1>scoot</h1>
            </nav>
            <nav className='nav'>
                <NavLink className={({isActive}) => 
                    isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
                }
                    to="/About"
                >
                    About
                </NavLink> 
                <NavLink className={({isActive}) => 
                    isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
                }
                    to="/Location"
                >
                    Location
                </NavLink>
                <NavLink className={({isActive}) => 
                    isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
                }
                    to="/Careers"
                >
                    Careers
                </NavLink>            
            </nav>   
        </nav>        
        <button className='button'>Get Scootin</button>
    </div>    
  )
}

export default Navigation
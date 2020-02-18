import React from 'react'
import NightMoon from './NightMoon'
import NavBarList from './NavBarList'
import './NavBar.scss'



function NavBar() {
   

    
        return (
        <div className="flexContainer">
        
        <div className="NightMoon"><NightMoon className="NightMoon"/></div>
        
        <div>
            <h1 className="title"> Wild Circus </h1>
            <NavBarList/>
        </div>
        

         </div>

        )
    


}


export default NavBar
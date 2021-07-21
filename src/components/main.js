import React from "react"
import {head, foot,main,left,right,logo} from "./main.module.css"
import {NavLink} from "react-router-dom";
function Main(props) {
 
  return (
      <main className={main}>
    <header className={head}>
       <div className={left}>
        <NavLink  className={logo}  to="/main"><h1 >Daniel Cobos</h1></NavLink>
       </div>
       <div className={right}>
        
            <NavLink  to="/aboutme" >Acerca de Mi</NavLink> 
             <NavLink  to="/minidemos" >Minidemos</NavLink> 
         
          <span> En ingles</span>
       </div>
      
    </header>
    {props.children}
    <footer className={foot}>
        Esto seria el footer
    </footer>
    
      </main>

    )

}
export default Main
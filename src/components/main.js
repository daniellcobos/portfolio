import React from "react"
import {head, foot,main,left,right,logo,language} from "./main.module.css"
import {NavLink} from "react-router-dom";
function Main(props) {
   let buttonText,aboutmeText
    if (props.Language === "Español"){
      buttonText= "English"
      aboutmeText="About Me"
    }
    else {
      buttonText="Español"
      aboutmeText="Acerca de"
    }
  
  return (
      <main className={main}>
    <header className={head}>
       <div className={left}>
        <NavLink  className={logo}  to="/main"><h1 >Daniel Cobos</h1></NavLink>
       </div>
       <div className={right}>
        
            <NavLink  to="/aboutme" >{aboutmeText}</NavLink> 
             
         
         <button className={language} onClick={props.changeLanguage} >{buttonText}</button> 
       </div>
      
    </header>
    {props.children}
    <footer className={foot}>
        Made by Daniel Cobos, on React
    </footer>
    
      </main>

    )

}
export default Main
import {stackstyle,mainstyle,images,desc,link,stackdiv} from "./proyectos.module.css"
const Proyectos = (props) => {
  
return(
    <div className={mainstyle}>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name} className={images}/>
        <div className={desc}>
        <p >{props.descripcion}</p>
        <a href={props.web} className={link}>Enlace</a><br></br>
        <div className={stackdiv}>
        {props.stack.map(
                (stack) => { return <span className={stackstyle} key={stack}>{stack}</span>}
            )}
        </div>
        
        </div>
       
     
    </div>
    )
}

export default Proyectos
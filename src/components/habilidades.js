import {Habilidadestyle} from  "./proyectos.module.css"


const Habilidades = (props) => {
    return(
        <div className={Habilidadestyle}>
            <p>{props.texto}</p>
        </div>
    )
   
}
export default Habilidades
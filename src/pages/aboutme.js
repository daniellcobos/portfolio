

import {aboutmestyle} from "./pages.module.css"
const Aboutme = (props) =>{
    const text= props.text
   
    return(<div className={aboutmestyle}>
        <div>
        <h2> Bio</h2>
        <p> {text.bio}</p>
        </div>
        <div>
            {
                text.capacidades.map(
                    (t) => {return(<p key={Math.random()}>{t}</p>)}
                )
            }
        </div>
        <div>
            <h4>  <a href={props.media.Youtube}>Youtube, In Spanish</a> </h4>
            <h4><a href={props.media.Linkedin}> Linkedin</a></h4>
        </div>
    </div>)
}
export default Aboutme;
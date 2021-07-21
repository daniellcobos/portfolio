import React,{useState} from 'react';
import './App.css';
import Main from './components/main'
import {Redirect, Route} from 'react-router-dom';
import proyectos from './proyectos.json'
import Proyectos from './components/proyectos';
import cuarentenapp from './images/Cuarentenapp.PNG'
import dippi from './images/Dippi.PNG'
import ornetto from './images/Ornetto.PNG'
import habilidades from './Habilidades.json'
import Habilidades from './components/habilidades';
import Aboutme from './pages/aboutme';
import Minidemos from './pages/Minidemos';
import aboutmejson from "./pages/aboutme.json"




function App() {
  const Dippi = dippi
  const Cuarentenapp = cuarentenapp
  const Ornetto = ornetto
  let [Language,setLanguage] = useState("Español")
  const Spanishtext=["Desarrollo Junior Frontend y Backend","Hola, mi nombre es Daniel Leonardo Cobos, Soy Estudiante de Ingenieria Catastral y Geodesia en proceso de grado","Mis Proyectos"]
  const Englishtext=["Backend and Frontend Junior Developer","Hello, I am Daniel Cobos, Geodesy and Cadastral Engineering student on thesis process","My Projects"]
  const [proyectosRender,setproyectosRender] = useState(proyectos.proyectos)
  const [habilidadesRender,setHabilidadesRender] = useState(habilidades.Habilidades)
  const [Maintext,setMaintext] = useState(Spanishtext)
  const [Aboutmetext,setAboutmetext] =useState(aboutmejson.aboutmespanish)
  const proy = []
  for (let proyecto of proyectosRender)
  {
    proy.push(<Proyectos name={proyecto.name} descripcion={proyecto.descripcion} web={proyecto.web} stack={proyecto.stack} image={eval(proyecto.image)} key={proyecto.name}> </Proyectos>)
    }
  
    const changeLanguage = () =>{
      if (Language === "Español"){
        setproyectosRender(proyectos.proyects)
      setHabilidadesRender(habilidades.Habilities)
      setMaintext(Englishtext)
      setLanguage("English")
      setAboutmetext(aboutmejson.aboutmeEnglish)
      }
      else if (Language==="English") {
      setproyectosRender(proyectos.proyectos)
      setHabilidadesRender(habilidades.Habilidades)
      setMaintext(Spanishtext)
      setLanguage("Español")
      setAboutmetext(aboutmejson.aboutmespanish)
      }
    }
  
  return (
    <Main changeLanguage={changeLanguage} Language={Language}>
      <Route exact path ="/">
        <Redirect to="/portfolio/" />
      </Route>
    <Route exact path="/aboutme" >
        <Aboutme text={Aboutmetext} Language={Language} media={aboutmejson.Socialmedia}/>
    </Route>
    <Route exact path="/portfolio/">
        
      <div className="intro">
        <h1> {Maintext[0]}</h1>
        <h2>{Maintext[1]}</h2> 
        <div className="Habilidades">
      <Habilidades texto={habilidadesRender}/>
      </div>
      </div>
      
      <div className="Proyectos">
        <h2> {Maintext[2]}</h2>
      {proy.map(
        (pro) =>{return(pro)}
      )}
      </div>
      
    </Route>
    
    <Route  path="/nose">
        <Minidemos/>
    </Route>
  </Main>
  );
}

export default App;

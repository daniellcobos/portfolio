import './App.css';
import Main from './components/main'
import {Route} from 'react-router-dom';
import proyectos from './proyectos.json'
import Proyectos from './components/proyectos';
import cuarentenapp from './images/Cuarentenapp.PNG'
import dippi from './images/Dippi.PNG'
import ornetto from './images/Ornetto.PNG'
import habilidades from './Habilidades.json'
import Habilidades from './components/habilidades';
import Aboutme from './pages/aboutme';
import Minidemos from './pages/Minidemos';
function App() {
  const Dippi = dippi
  const Cuarentenapp = cuarentenapp
  const Ornetto = ornetto
  const proyectosRender = proyectos.proyectos
  const habilidadesRender = habilidades.Habilidades
  const proy = []
  for (let proyecto of proyectosRender)
  {
    proy.push(<Proyectos name={proyecto.name} descripcion={proyecto.descripcion} web={proyecto.web} stack={proyecto.stack} image={eval(proyecto.image)} key={proyecto.name}> </Proyectos>)
    }
  
    
  
  return (
    <Main>
    <Route path="/main">
        
      <div className="intro">
        <h1> Desarrollo Junior Front End y Back End</h1>
        <h2>Hola, mi nombre es Daniel Leonardo Cobos, Soy Estudiante de Ingenieria Catastral y Geodesia en proceso de grado</h2> 
      </div>
      <div className="Habilidades">
      <Habilidades texto={habilidadesRender}/>
      </div>
      <div className="Proyectos">
        <h2> Mis Proyectos</h2>
      {proy.map(
        (pro) =>{return(pro)}
      )}
      </div>
      
    </Route>
    <Route path="/aboutme">
        <Aboutme/>
    </Route>
    <Route path='/minidemos'>
        <Minidemos/>
    </Route>
  </Main>
  );
}

export default App;

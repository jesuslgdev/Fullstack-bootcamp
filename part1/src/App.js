
import './App.css';
import Mensaje from './Mensaje'



const Description = () =>{
  return <p>Este es un bootcamp</p>
}

function App() {
  
  return (
   <div className='App'>
    <Mensaje msg = 'Estamos trabajando en un curso de React'></Mensaje>
    <Mensaje></Mensaje>
    <Description></Description>
   </div>
  );
}

export default App;

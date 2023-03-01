import './App.css';
import Card from './components/card/Card';
import Contador from './components/contador/Contador';

function App() {
  const data = {
    name: 'Ivancillo',
    lastName: 'Economo',
    img: 'https://rickandmortyapi.com/api/character/avatar/725.jpeg',
  };

  const logName = (name) => console.log(name);
  console.log('Soy el app');
  
  return (
    <div className="App">
      <Card cardData={data} mostrarNombre={logName}/>
      <Contador />
    </div>
  );
}

export default App;

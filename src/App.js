import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';
import Rodape from './components/Rodape/Rodape';



function App() {

  const times = [
    {
      name:'Programação',
      firstColor: '#57c278',
      secondColor: '#d9f7e9'
    },
    {
      name:'Front-end',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name:'Data Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name:'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name:'UX e Design',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name:'Mobile',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name:'Inovação e Gestão',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]
  const [colaboradores, setColaboradores] = useState ([])

const aoNovoColaboradorAdicionado = (colaborador) =>{
  setColaboradores([...colaboradores, colaborador])
}
  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.name)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time  
        key={time.name} 
        nomeTime={time.name} 
        firstColor={time.firstColor} 
        secondColor={time.secondColor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Banner from './componente/Banner';
import Formulario from './componente/Formulario';
import Time from './componente/Time';
import Rodape from './componente/Rodape';
import '../src/App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação', 
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End', 
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science', 
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops', 
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design', 
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Bianca Teixeira",
      cargo: "Desenvolvedora",
      imagem: "https://github.com/biancabt1102.png",
      time: times[1].nome
    }
  ];

  const[colaboradores,setColaboradores] = useState(inicial);

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }));
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])}
       />
       <section className='times'>
        <h1>Minha organização:</h1>
        {times.map((time, indice) => 
          <Time 
            mudarCor={mudarCorDoTime}
            key={indice} 
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />)}
       </section>
      <Rodape />
    </div>
  );
}

export default App;

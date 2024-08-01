import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Busca from './components/busca/Busca'
import ClimaAtual from './components/climaAtual/ClimaAtual'
import Previsao from './components/previsao/Previsao'



function App() {
  
  const [cidade , setCidade] = useState("") 
  const [clima , setClima] = useState(null)
  const [previsao , setPrevisao] = useState([])

  /* trazendo a api do arquivo .env */
  const apiKey = import.meta.env.VITE_API_KEY || "Api Nao encontrada"

  useEffect(() => {

    navigator.geolocation.getCurrentPosition( async (position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
      console.log(position)

      setCidade(resposta.data.name)
      setClima(resposta.data)
    })

  }, [apiKey])

/* funçao para buscar o clima na api */
const buscarClima = async () => {
  try {
    /* buscando dados do clima api com o axios */
    const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)

     /* buscando dados da previsao */
     const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
    
     setClima(respostaClima.data) /* setando a resposta da api no setclima Clima  */
     setPrevisao(respostaPrevisao.data.list.slice(0 , 5))/* setando a resposta da api no setPrevisao previsao */

  } catch (error) {
    console.log("Error ao buscar clima" , error)
  }
};

  return (
    <>
      <div className='Container'>
        <h1>Condiçoes Climaticas</h1>
        
        <Busca
        cidade={cidade}
        setCidade={setCidade}
        buscarClima={buscarClima}
        />

        {clima && <ClimaAtual clima={clima}/>} 

       { previsao.length > 0 && <Previsao previsoes={previsao}/>}

      </div>
    </>
  )
}

export default App

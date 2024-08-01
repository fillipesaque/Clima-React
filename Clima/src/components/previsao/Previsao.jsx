import "./Previsao.css"

const Previsao = ({previsoes}) => {
    return(
        <div className="Container-previsao">
            <h3>Previsoes para as proximas horas</h3>
            <ul>
            {previsoes.map((previsao) => (
            <li key={previsao.dt}>
                <img src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                 alt={previsao.weather[0].description} 
            />
            {previsao.main.temp} C - {previsao.weather[0].description}
            </li>        
                ))}
            </ul>
        </div>
    )
}

export default Previsao
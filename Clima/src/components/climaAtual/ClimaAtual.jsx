import "./ClimaAtual.css"

const ClimaAtual = ({clima}) => {
    
    return (
        <div className="Container-ClimaAtual">
            <h3>{clima.name}</h3>
            <img 
            src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} 
            alt={clima.weather[0].description} 
            />

            <p>{clima.main.temp}</p>
            <p>{clima.weather[0].description}</p>
        </div>
    )
}

export default ClimaAtual
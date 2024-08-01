import "./Busca.css"

const Busca = ({cidade , setCidade , buscarClima}) => {
    return (
        <div className="BuscaContainer">
            <input className="BuscaCidade"
                type="text"
                placeholder="Digite Uma Cidade"
                onChange={(e) => setCidade(e.target.value)}
                value={cidade}
            />
            <button className="Btn-Buscar"
                onClick={buscarClima}>
                Buscar
            </button>
        </div>
    )
}

export default Busca
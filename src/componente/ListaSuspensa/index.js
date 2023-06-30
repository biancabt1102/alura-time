import './ListaSuspensa.css';

const ListaSuspensa = ({label, itens, valor, aoAlterado, obrigatorio = false}) => {

    return(
        <div className="lista-suspensa">
            <label>{label}</label>
            <select 
                required={obrigatorio} 
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
            >
                <option value="" />
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;
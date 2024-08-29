import React from 'react';

const Filtro = ({ filtro, setFiltro, setSort }) => {
    return (
        <div className="filtro">
            <h2>Filtrar:</h2>
            <div className="filtrar-opcoes">
                <div>
                    <p>Status: </p>
                    <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value="Todas">Todas</option>
                        <option value="Completas">Completas</option>
                        <option value="Incompletas">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética: </p>
                    <button onClick={() => setSort("Cresc")}>Cresc</button>
                    <button onClick={() => setSort("Decres")}>Decres</button>
                </div>
            </div>
        </div>
    );
}

export default Filtro;

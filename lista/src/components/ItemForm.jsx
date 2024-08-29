import { useState } from 'react';

const ItemForm = ({ addItem }) => {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !categoria) return;
        addItem(titulo, categoria)
        setTitulo("");
        setCategoria("");
    };

    return (
        <div className="item-form">
            <h2>Nova tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type="submit">Criar Tarefa</button>
            </form>
        </div>
    );
}

export default ItemForm;

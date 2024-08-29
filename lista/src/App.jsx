import { useState } from 'react';
import "./App.css";
import Itemm from './components/Itemm';
import ItemForm from './components/ItemForm';
import Busca from './components/Busca';
import Filtro from './components/Filtro';
import Grafico from './components/Grafico';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Criar uma tabela",
      categoria: "Trabalho",
      completo: false,
    },
    {
      id: 2,
      text: "Limpar a casa",
      categoria: "Pessoal",
      completo: false,
    },
    {
      id: 3,
      text: "Estudar para a prova do prof Ricardin",
      categoria: "Estudos",
      completo: false,
    },
  ]);

  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todas");
  const [sort, setSort] = useState("Cresc");

  const addItem = (text, categoria) => {
    const newItems = [...items, {
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
      completo: false,
    }];
    setItems(newItems);
  };

  const removeItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const completaItem = (id) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, completo: !item.completo } : item
    );
    setItems(newItems);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Busca busca={busca} setBusca={setBusca} />
      <Filtro filtro={filtro} setFiltro={setFiltro} setSort={setSort} />
      <Grafico items={items} /> { }

      <div className="items-lista">
        {items
          .filter(item =>
            filtro === "Todas" ? true :
              filtro === "Completas" ? item.completo : !item.completo
          )
          .filter(item =>
            item.text.toLowerCase().includes(busca.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Cresc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map(item => (
            <Itemm
              key={item.id}
              item={item}
              removeItem={removeItem}
              completaItem={completaItem}
            />
          ))}
      </div>
      <ItemForm addItem={addItem} />
    </div>
  );
}

export default App;

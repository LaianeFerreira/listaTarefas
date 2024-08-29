import React from 'react'

const Itemm = ({ item, removeItem, completaItem }) => {
  return (
    <div className="itemm" style={{ textDecoration: item.completo ? "line-through" : "" }}>
      <div>
        <div className="content">
          <p>{item.text}</p>
          <p>({item.categoria})</p>
        </div>
        <div>
          <button className='completar' onClick={() => completaItem(item.id)}>Completar</button>
          <button className='remover' onClick={() => removeItem(item.id)}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Itemm;

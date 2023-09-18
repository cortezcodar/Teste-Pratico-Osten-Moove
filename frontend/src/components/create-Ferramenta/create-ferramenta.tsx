import React, { useState } from 'react';
import './Create-ferramenta.css'; 




const CreateFerramenta: React.FC = () => {
  const [newFerramenta, setNewFerramenta] = useState({
    name: '',
    status: 'Disponível',
    collectionDateTime: '',
    returnDateTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewFerramenta({ ...newFerramenta, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nova Ferramenta:', newFerramenta);
  };

  return (
    <div className="create-ferramenta-container"> {}
      <h2>Adicionar Nova Ferramenta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="name" value={newFerramenta.name} onChange={handleChange} />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={newFerramenta.status} onChange={handleChange}>
            <option value="Reservada">Reservada</option>
            <option value="Indisponível">Indisponível</option>
            <option value="Disponível">Disponível</option>
          </select>
        </div>
        <div>
          <label>Data e Hora de Coleta:</label>
          <input type="datetime-local" name="collectionDateTime" value={newFerramenta.collectionDateTime} onChange={handleChange} />
        </div>
        <div>
          <label>Data e Hora de Devolução:</label>
          <input type="datetime-local" name="returnDateTime" value={newFerramenta.returnDateTime} onChange={handleChange} />
        </div>
        <button type="submit">Adicionar Ferramenta</button>
      </form>
    </div>
  );
};

export default CreateFerramenta;

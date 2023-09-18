import React, { useState, useEffect } from 'react';
import './list-ferramenta.css';

const ListFerramenta: React.FC = () => {
  const [ferramentas, setFerramentas] = useState<ListFerramenta[]>([]);
  const [selectedFerramenta, setSelectedFerramenta] = useState<ListFerramenta| null>(null);

  interface ListFerramenta{
    id: number;
    name: string;
    status: string;
    collectionDateTime: string;
    returnDateTime: string;
  }

  useEffect(() => {
    const ferramentasData: ListFerramenta[] = [
      {
        id: 1,
        name: '',
        status: '',
        collectionDateTime: '',
        returnDateTime: '',
      },
    ];

    setFerramentas(ferramentasData);
  }, []);

  const handleDelete = (id: number) => {
    const shouldDelete = window.confirm('Tem certeza de que deseja deletar esta ferramenta?');
    if (shouldDelete) {
      const updatedFerramentas = ferramentas.filter((ferramenta) => ferramenta.id !== id);
      setFerramentas(updatedFerramentas);
    }
  };

  const handleReserve = (id: number) => {
    const updatedFerramentas = ferramentas.map((ferramenta) => {
      if (ferramenta.id === id) {
        ferramenta.status = 'Reservada';
      }
      return ferramenta;
    });
    setFerramentas(updatedFerramentas);
  };

  const handleStatusChange = (status: string, ferramenta: ListFerramenta) => {
    const updatedFerramentas = ferramentas.map((f) => {
      if (f.id === ferramenta.id) {
        f.status = status;
      }
      return f;
    });
    setFerramentas(updatedFerramentas);
    setSelectedFerramenta(null);
  };

  return (
    <div className="list-ferramenta-container">
      <h2>Lista de Ferramentas</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Data e Hora de Coleta</th>
            <th>Data e Hora de Devolução</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ferramentas.map((ferramenta) => (
            <tr key={ferramenta.id}>
              <td>{ferramenta.name}</td>
              <td>
                {selectedFerramenta === ferramenta ? (
                  <select
                    value={ferramenta.status}
                    onChange={(e) => handleStatusChange(e.target.value, ferramenta)}
                  >
                    <option value="Reservada">Reservada</option>
                    <option value="Indisponível">Indisponível</option>
                    <option value="Disponível">Disponível</option>
                  </select>
                ) : (
                  ferramenta.status
                )}
              </td>
              <td>{ferramenta.collectionDateTime}</td>
              <td>{ferramenta.returnDateTime}</td>
              <td>
                {selectedFerramenta === ferramenta ? (
                  <button onClick={() => handleStatusChange(ferramenta.status, ferramenta)}>
                    Salvar
                  </button>
                ) : (
                  <>
                    <button onClick={() => setSelectedFerramenta(ferramenta)}>
                      Editar
                    </button>
                    <button onClick={() => handleReserve(ferramenta.id)}>Reservar</button>
                    <button onClick={() => handleDelete(ferramenta.id)}>Deletar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFerramenta;

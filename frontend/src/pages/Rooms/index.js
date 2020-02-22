import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronCircleDown } from 'react-icons/fa';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Content from '../../components/Content';

import api from '../../services/api';
import history from '../../services/history';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [changeStatus, setChangeStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/room');
      setRooms(data);
    })();
  }, [changeStatus]);

  async function handleDelete(id) {
    // eslint-disable-next-line no-alert
    const resp = window.confirm('Deseja realmente remover esta sala?');
    if (resp) {
      try {
        await api.delete(`/room/${id}`);
        toast.success('Collaborador removido com sucesso!');
        setChangeStatus(!changeStatus);
      } catch (error) {
        toast.error('Falha na autenticação, verifique os dados eviados!');
      }
    }
  }

  return (
    <Container>
      <Header>
        <h1 className="font-weight-bold">Salas</h1>
        <Button
          className="font-weight-bold"
          variant="primary"
          type="submit"
          onClick={() => history.push(`/rooms/add`)}
        >
          Adicionar
        </Button>
      </Header>
      <Content>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Qntd. Cadeiras</th>
                <th scope="col">Computador?</th>
                <th scope="col">Projetor?</th>
                <th scope="col">Video Chat?</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(item => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.qntd_chairs}</td>
                  <td>
                    {item.has_computer ? (
                      <FaChevronCircleDown color="green" />
                    ) : (
                      <FaChevronCircleDown color="#ccc" />
                    )}
                  </td>
                  <td>
                    {item.has_projector ? (
                      <FaChevronCircleDown color="green" />
                    ) : (
                      <FaChevronCircleDown color="#ccc" />
                    )}
                  </td>
                  <td>
                    {item.has_video_chat ? (
                      <FaChevronCircleDown color="green" />
                    ) : (
                      <FaChevronCircleDown color="#ccc" />
                    )}
                  </td>

                  <td className="d-flex justify-content-between">
                    <Link
                      to={{
                        pathname: `/rooms/edit/${item.id}`,
                        state: item,
                      }}
                    >
                      Editar
                    </Link>
                    <Button
                      variant="link"
                      className="text-danger table-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Content>
    </Container>
  );
}

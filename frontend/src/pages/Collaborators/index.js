import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Content from '../../components/Content';

import api from '../../services/api';
import history from '../../services/history';

export default function Collaborators() {
  const [collaborators, setCollaborators] = useState([]);
  const [changeStatus, setChangeStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/collaborator');
      setCollaborators(data);
    })();
  }, [changeStatus]);

  async function handleDelete(id) {
    // eslint-disable-next-line no-alert
    const resp = window.confirm('Deseja realmente remover este colaborador?');
    if (resp) {
      try {
        await api.delete(`/collaborator/${id}`);
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
        <h1 className="font-weight-bold">Colaboradores</h1>
        <Button
          className="font-weight-bold"
          variant="primary"
          type="submit"
          onClick={() => history.push(`/collaborators/add`)}
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
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {collaborators &&
                collaborators.map(item => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td className="d-flex justify-content-between">
                      <Link
                        to={{
                          pathname: `/collaborators/edit/${item.id}`,
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

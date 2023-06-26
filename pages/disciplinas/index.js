import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BiPlusCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import styles from "../../styles/index.module.css"
import axios from "axios";
import Link from "next/link";


const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  function getAll(){
      axios.get('/api/disciplinas').then(resultado => {
        setDisciplinas(resultado.data);
    })
  }

  function excluir(id) {
      if(confirm('Deseja realmente excluir?')) {
        axios.delete('/api/disciplinas/' + id)
        getAll()
    }
  }

  return (
    <>
      <div className={styles.cover} >
      <Pagina titulo="Disciplinas">
         <Button href='/disciplinas/form' variant="primary mb-3"  >Novo <BiPlusCircle /></Button>{' '}
        <br></br>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Disciplinas</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/disciplinas/' + item.id}></Link>
                  <Button className='btn btn-secondary me-2' href={'/disciplinas/' + item.id}>
                    <BsPencilFill title="Alterar"/>
                    </Button> 
                  <Button className='btn btn-danger'>
                    <BiTrash onClick={() => excluir(item.id)}/>
                    </Button>
                </td>
                <td>{item.nome}</td>
                <td>{item.curso}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
      </div>
    </>
  );
};

export default index
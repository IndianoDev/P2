import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
import styles from "../../styles/index.module.css"

const index = () => {

  const [professores, Setprofessores] = useState([])

  useEffect(() => {
    Setprofessores(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('professores')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('professores', JSON.stringify(itens))
      Setprofessores(itens)
    }
  }
  return (
    <div className={styles.cover}>
    <Pagina titulo='Professores'>

      <Button href='/professores/form' variant="primary mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr className= 'text-white'>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Salário</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CEP</th>
          
          </tr>
        </thead>
        <tbody>


          {professores.map((item, i) => (
            <tr key={i}>
              <td className= 'text-white'>
                <Link href={'/professores/form ' + i}>
                <Button variant='tranparent' className='ms-2'><AiFillEdit  className="text-primary" /></Button>
                </Link>
                <Button variant='tranparent' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td className= 'text-white'>{item.nome}</td>
              <td className= 'text-white'>{item.cpf}</td>
              <td className= 'text-white'>{item.matricula}</td>
              <td className= 'text-white'>{item.salario}</td>
              <td className= 'text-white'>{item.email}</td>
              <td className= 'text-white'>{item.telefone}</td>
              <td className= 'text-white'>{item.cep}</td>
       
            </tr>
          ))}

        </tbody>


      </Table>
    </Pagina>
    </div>
  )
}

export default index
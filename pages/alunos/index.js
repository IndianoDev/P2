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

  const [alunos, Setalunos] = useState([])

  useEffect(() => {
    Setalunos(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('alunos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('alunos', JSON.stringify(itens))
      Setalunos(itens)
    }
  }
  return (
    <div className={styles.cover}>
    <Pagina titulo='Alunos'>

      <Button href='/alunos/form' variant="primary mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr className='text-white'>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Número</th>
            <th>Bairro</th>
            
          </tr>
        </thead>
        <tbody>


          {alunos.map((item, i) => (
            <tr key={i} className='text-white'>
              <td>
                <Link href={'/alunos/' + i}>
                <Button variant='tranparent' className='ms-2'><AiFillEdit  className="text-primary" /></Button>
                </Link>
                <Button variant='tranparent' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td className='text-white'>{item.nome}</td>
              <td className='text-white'>{item.cpf}</td>
              <td className='text-white'>{item.matricula}</td>
              <td className='text-white'>{item.email}</td>
              <td className='text-white'>{item.telefone}</td>
              <td className='text-white'>{item.cep}</td>
              <td className='text-white'>{item.logradouro}</td>
              <td className='text-white'>{item.complemento}</td>
              <td className='text-white'>{item.numero}</td>
              <td className='text-white'>{item.bairro}</td>
            </tr>
          ))}

        </tbody>


      </Table>
   
    </Pagina>
    </div>

  )
}

export default index
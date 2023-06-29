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

  const [semestres, Setsemestres] = useState([])

  useEffect(() => {
    Setsemestres(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('semestres')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('semestres', JSON.stringify(itens))
      Setsemestres(itens)
    }
  }
  return (
    <div className={styles.cover}>
    <Pagina titulo='Semestres'>

      <Button href='/semestres/form' variant="primary mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr className='text-white'>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>Data inicio</th>
            <th>Data fim</th>
          </tr>
        </thead>
        <tbody>


          {semestres.map((item, i) => (
            <tr key={i} className='text-white'>
              <td className='text-white'>
                <Link href={'/semestres/' + i}>
                <Button variant='tranparent' className='ms-2'><AiFillEdit  className="text-primary" /></Button>
                </Link>
                <Button variant='tranparent' className='ms-2' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td className='text-white'>{item.nome}</td>
              <td className='text-white'>{item.datainicio}</td>
              <td className='text-white'>{item.datafim}</td>
            </tr>
          ))}

        </tbody>


      </Table>
    </Pagina>
    </div>
  )
}

export default index
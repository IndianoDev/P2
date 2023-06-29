import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import Link from 'next/link';
import styles from "../../styles/index.module.css"
import XLSX from "xlsx"

const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())

  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('cursos', JSON.stringify(itens))
      setCursos(itens)
    }
  }

  const handleOnExport  =() =>{
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_curso(cursos);

      XLSX.utils.book_append_curso(wb, ws, "MyCurso1");

      XLSX.writeFile(wb, "MyExcel.xlsx")

    
  };
  
  return (
    <div className={styles.cover}>
    <Pagina titulo='Cursos'>

      <Button href='/cursos/form' variant="primary mb-3"  >Novo <BiPlusCircle /></Button>{' '}

      <Table striped bordered hover className='text-center'>
        <thead>
          <tr className= 'text-white'>
            <th>Alterar/Excluir</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>


          {cursos.map((item, i) => (
            <tr key={i} className= 'text-white'>
              <td className= 'text-white'>
                <Link href={'/cursos/' + i}>
                <Button variant='tranparent' className='ms-3'><AiFillEdit className="text-primary" /></Button>
                </Link>
                <Button variant='tranparent' className='ms-3' ><AiFillDelete onClick={() => excluir(i)} className="text-danger" /></Button></td>
              <td className= 'text-white'>{item.nome}</td>
              <td className= 'text-white'>{item.duracao}</td>
              <td className= 'text-white'>{item.modalidade}</td>
            </tr>
          ))}

        </tbody>
      </Table>

      <Row>
        <Col md={12}>
        <Button onClick={handleOnExport}>Exportar</Button>
        </Col>
      </Row>

    </Pagina>
    </div>
  )
}

export default index
import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          
        <Image src='https://infoenem.com.br/wp-content/uploads/2015/08/udf.png' style={{ height: '50px', width: 'auto', marginTop: '10px', marginBottom: '10px', }} ></Image>

          <Navbar.Brand href="/cursos"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/alunos">Matricule-se</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/salas">Salas</Nav.Link>
            <Nav.Link href="/semestres">Semestre</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho
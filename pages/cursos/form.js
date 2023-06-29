import Pagina from '@/components/Pagina'
import cursoValidator from '@/validators/curso.validator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import styles from "../../styles/index.module.css"


const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors}, setValue } = useForm()

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }

 
  
  return (
    <div className={styles.cover}>
    <Pagina titulo='Formulário'>
      <Form>
        <Row  md={3}>
        <Form.Group className="mb-3 text-white" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text"
          placeholder="Insira o nome do curso"
          {...register('nome', cursoValidator.nome)}
          isInvalid={errors.nome}  />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="duracao">
          <Form.Label>Duração:</Form.Label>
          <Form.Control
          mask='5555'
          maxLength={4}
          type="text"
          placeholder="Insira a duração do curso"
          {...register('duracao', cursoValidator.duracao)}
          isInvalid={errors.duracao} />
          {
             errors.duracao &&
            <small className='mt-1'>{errors.duracao.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="modalidade">
          <Form.Label>Modalidade:</Form.Label>
          <Form.Control 
          maxLength={15}
          type="text"
          placeholder="Insira a modalidade do curso"
          {...register('modalidade', cursoValidator.modalidade)}
          isInvalid={errors.modalidade}  />
          {
             errors.modalidade &&
            <small className='mt-1'>{errors.modalidade.message}</small>
          }
        </Form.Group>
        </Row>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/cursos'>
          <AiFillStepBackward className='me-2'/>
          Voltar
          </Link>
          <Button variant='primary'  className='ms-2' onClick={handleSubmit(salvar)}>
          <AiFillStepForward className='me-2'/>
          Salvar
          </Button>
        </div>
      
      </Form>
     
    </Pagina>
    </div>
  )
}

export default form
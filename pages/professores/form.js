import Pagina from '@/components/Pagina'
import professorValidator from "@/validators/professorValidator";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { mask } from 'remask';
import styles from "../../styles/index.module.css"

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors}, setValue } = useForm()

  function salvar(dados) {
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.push(dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <div className={styles.cover}>

    <Pagina titulo='Professores'>
      
   
      <Form>
        <Form.Group className="mb-3  text-white" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text" 
          placeholder="Insira o nome:"
          {...register('nome', professorValidator.nome)}
           isInvalid={errors.nome}   />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3  text-white" controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control 
           mask='999.999.999.99'
           maxLength={14}
           isInvalid={errors.cpf}
           type="text" 
           placeholder="Insira o CPF:"
           {...register('cpf', professorValidator.cpf)}
           onChange={handleChange}/>
          {
             errors.cpf &&
            <small className='mt-1 '>{errors.cpf.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3  text-white" controlId="matricula">
          <Form.Label>Matricula:</Form.Label>
          <Form.Control
           mask='99999999999'
           maxLength={11} 
           type="text"
           placeholder="Insira a matrícula:"
           {...register('matricula', professorValidator.matricula)}
           onChange={handleChange}
           isInvalid={errors.matricula}  />
          {
             errors.matricula &&
            <small className='mt-1 '>{errors.matricula.message}</small>
          }
        </Form.Group>

        
        <Form.Group className="mb-3  text-white" controlId="matricula">
          <Form.Label>Salário:</Form.Label>
          <Form.Control 
          maxLength={100}
          type="text"
          placeholder="Insira o salário:"
          {...register('salario', professorValidator.salario)}
          isInvalid={errors.salario}  />
          {
             errors.salario &&
            <small className='mt-1 '>{errors.salario.message}</small>
          }
        </Form.Group>
  
       
       
        
        <Form.Group className="mb-3  text-white" controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control  
           maxLength={50}
          type="text"
          placeholder="Insira o e-mail:"
          {...register('email', professorValidator.email)}
          isInvalid={errors.email} />
          {
             errors.email &&
            <small className='mt-1 '>{errors.email.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3  text-white" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control 
           mask='(99)99999-9999'
          maxLength={15}
          type="text"
          placeholder="Insira o telefone:"
          {...register('telefone',professorValidator.telefone)}
          onChange={handleChange}
          isInvalid={errors.telefone} />
          {
             errors.telefone &&
            <small className='mt-1 '>{errors.telefone.message}</small>
          }
        </Form.Group>
       

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/professores'>
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
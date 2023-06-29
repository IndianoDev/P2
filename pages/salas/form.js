import Pagina from '@/components/Pagina'
import salaValidator from "@/validators/salaValidator";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { mask } from 'remask';
import styles from "../../styles/index.module.css"

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState:{errors}, setValue } = useForm()

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <div className={styles.cover}>
    <Pagina titulo='Formulário'>
      <Form>
        <Form.Group className="mb-3 text-white" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text"
          placeholder="Insira o nome da sala:"
          {...register('nome', salaValidator.nome)}
          isInvalid={errors.nome}  />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="capacidade">
          <Form.Label>Capacidade:</Form.Label>
          <Form.Control mask='99999999999'
          maxLength={11}
          type="text" 
          placeholder="Insira a capacidade da sala:"
          {...register('capacidade', salaValidator.capacidade)}
          isInvalid={errors.capacidade}  />
          {
             errors.capacidade &&
            <small className='mt-1 '>{errors.capacidade.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="tipo">
          <Form.Label>Tipo:</Form.Label>
          <Form.Control 
          maxLength={50}
          type="text"
          placeholder="Insira o tipo da sala:"
          {...register('tipo', salaValidator.tipo)}
          isInvalid={errors.tipo}  />
          {
             errors.tipo &&
            <small className='mt-1 '>{errors.tipo.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/salas'>
        
          Voltar
          </Link>
          <Button variant='primary'  className='ms-2' onClick={handleSubmit(salvar)}>
        
          Salvar
          </Button>
        </div>

      </Form>
    </Pagina>
    </div>
  )
}

export default form
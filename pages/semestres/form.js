import Pagina from '@/components/Pagina'
import semestreValidator from '@/validators/semestreValidator';
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
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.push(dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }
  return (
    <div className={styles.cover}>
    <Pagina titulo='Semestres'>
      <Form>
        <Form.Group className="mb-3 text-white" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
          maxLength={80}
          type="text" 
          placeholder="Insira o período:"
          {...register('nome', semestreValidator.nome)}
          isInvalid={errors.nome}  />
          {
             errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="datainicio">
          <Form.Label>Data inicio:</Form.Label>
          <Form.Control 
          mask='99/99/9999'
          maxLength={10}
          type="text" 
          placeholder="Insira a data de início:"
          {...register('datainicio', semestreValidator.datainicio)}
          onChange={handleChange}
          isInvalid={errors.datainicio}  />
          {
             errors.datainicio &&
            <small className='mt-1 '>{errors.datainicio.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="datafim">
          <Form.Label>Data fim:</Form.Label>
          <Form.Control mask='99/99/9999'
          type="text"
          placeholder="Insira a data do fim:"
          {...register('datafim', semestreValidator.datafim)}
          onChange={handleChange}
          isInvalid={errors.datafim}  />
          {
             errors.datafim &&
            <small className='mt-1 '>{errors.datafim.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/semestres'>
          
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
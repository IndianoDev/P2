import Pagina from '@/components/Pagina'
import cursoValidator from '@/validator/curso.validator';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { mask } from 'remask';

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  function salvar(dados) {
    const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
    alunos.push(dados)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    push('/alunos')
  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(valor, mascara));
  }

  return (
    <Pagina titulo='Alunos'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
            errors.nome &&
            <small className='mt-1 '>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            mask='999.999.999.99'
            maxLength={14}
            {...register('cpf', cursoValidator.cpf)}
            onChange={handleChange}
            isInvalid={errors.cpf}
            type="text" />

          {
            errors.cpf &&
            <small className='mt-1 '>{errors.cpf.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula:</Form.Label>
          <Form.Control isInvalid={errors.matricula} type="text"{...register('matricula', cursoValidator.matricula)} />
          {
            errors.matricula &&
            <small className='mt-1 '>{errors.matricula.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control isInvalid={errors.email} type="text"{...register('email', cursoValidator.email)} />
          {
            errors.email &&
            <small className='mt-1 '>{errors.email.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text"{...register('telefone', cursoValidator.telefone)} />
          {
            errors.telefone &&
            <small className='mt-1 '>{errors.telefone.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP:</Form.Label>
          <Form.Control isInvalid={errors.cep} type="text"{...register('cep', cursoValidator.cep)} />
          {
            errors.cep &&
            <small className='mt-1 '>{errors.cep.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control isInvalid={errors.logradouro} type="text"{...register('logradouro', cursoValidator.logradouro)} />
          {
            errors.logradouro &&
            <small className='mt-1 '>{errors.logradouro.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control isInvalid={errors.complemento} type="text"{...register('complemento', cursoValidator.complemento)} />
          {
            errors.complemento &&
            <small className='mt-1 '>{errors.complemento.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número:</Form.Label>
          <Form.Control isInvalid={errors.numero} type="text"{...register('numero', cursoValidator.numero)} />
          {
            errors.numero &&
            <small className='mt-1 '>{errors.numero.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control isInvalid={errors.bairro} type="text"{...register('bairro', cursoValidator.bairro)} />
          {
            errors.bairro &&
            <small className='mt-1 '>{errors.bairro.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className=' btn btn-danger' href='/alunos'>
            <AiFillStepBackward className='me-2' />
            Voltar
          </Link>
          <Button variant='primary' className='ms-2' onClick={handleSubmit(salvar)}>
            <AiFillStepForward className='me-2' />
            Salvar
          </Button>
        </div>

      </Form>
    </Pagina>
  )
}

export default form
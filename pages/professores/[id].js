import React, { useEffect } from "react";

import Pagina from "@/components/Pagina";
import professorValidator from "@/validators/professorValidator";
import styles from "../../styles/index.module.css";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Col, Form, Row } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";
import Link from "next/link";
import { mask } from "remask";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get("/professores/" + query.id).then((resultado) => {
        console.log(resultado.data);

        const professor = resultado.data;

        for (let atributo in professor) {
          setValue(atributo, professor[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/professores/" + query.id, dados);
    push("/professores");
  }

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(valor, mascara));
  }

  return ( 
      <div className={styles.cover}>
        <Pagina titulo="Formulário">
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
   
  );
};

export default form;

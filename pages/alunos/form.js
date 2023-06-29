import React from "react";
import Pagina from "@/components/Pagina";
import alunoValidator from "@/validators/alunoValidator";
import styles from "../../styles/index.module.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { mask } from "remask";

const form = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  function salvar(dados) {
    console.log(dados);
    axios.post("/alunos", dados);
    push("/alunos");
  }

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(valor, mascara));
  }

  return (

    <div className={styles.cover}>

      <Pagina titulo="Aluno">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3  text-white" controlId="nome">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  maxLength={80}
                  type="text"
                  placeholder="Insira o nome:"
                  {...register('nome', alunoValidator.nome)}
                  isInvalid={errors.nome} />
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
                  {...register('cpf', alunoValidator.cpf)}
                  onChange={handleChange} />
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
                  {...register('matricula', alunoValidator.matricula)}
                  onChange={handleChange}
                  isInvalid={errors.matricula} />
                {
                  errors.matricula &&
                  <small className='mt-1 '>{errors.matricula.message}</small>
                }
              </Form.Group>






              <Form.Group className="mb-3  text-white" controlId="email">
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  maxLength={50}
                  type="text"
                  placeholder="Insira o e-mail:"
                  {...register('email', alunoValidator.email)}
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
                  {...register('telefone', alunoValidator.telefone)}
                  onChange={handleChange}
                  isInvalid={errors.telefone} />
                {
                  errors.telefone &&
                  <small className='mt-1 '>{errors.telefone.message}</small>
                }
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 text-white" controlId="cep">
                <Form.Label>CEP:</Form.Label>
                <Form.Control
                  mask='99.999.999'
                  maxLength={10}
                  type="text"
                  placeholder="Insira o CEP:"
                  {...register('cep', alunoValidator.cep)}
                  onChange={handleChange}
                  isInvalid={errors.cep} />
                {
                  errors.cep &&
                  <small className='mt-1 '>{errors.cep.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3 text-white" controlId="logradouro">
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  maxLength={20}
                  type="text"
                  placeholder="Insira o logradouro:"
                  {...register('logradouro', alunoValidator.logradouro)}
                  isInvalid={errors.logradouro} />
                {
                  errors.logradouro &&
                  <small className='mt-1 '>{errors.logradouro.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3 text-white" controlId="complemento">
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  mask='99999'
                  maxLength={5}
                  type="text"
                  placeholder="Insira o complemento:"
                  {...register('complemento', alunoValidator.complemento)}
                  isInvalid={errors.complemento} />
                {
                  errors.complemento &&
                  <small className='mt-1 '>{errors.complemento.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3 text-white" controlId="numero">
                <Form.Label>Número:</Form.Label>
                <Form.Control
                  mask='9999'
                  maxLength={4}
                  type="text"
                  placeholder="Insira o número:"
                  {...register('numero', alunoValidator.numero)}
                  isInvalid={errors.numero} />
                {
                  errors.numero &&
                  <small className='mt-1 '>{errors.numero.message}</small>
                }
              </Form.Group>

              <Form.Group className="mb-3 text-white" controlId="bairro">
                <Form.Label>Bairro:</Form.Label>
                <Form.Control
                  maxLength={20}
                  type="text"
                  placeholder="Insira o bairro:"
                  {...register('bairro', alunoValidator.bairro)}
                  isInvalid={errors.bairro} />
                {
                  errors.bairro &&
                  <small className='mt-1 '>{errors.bairro.message}</small>
                }
              </Form.Group>

            </Col>
            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={handleSubmit(salvar)}>Salvar</Button>
              <Link href="/alunos" className="ms-2 btn btn-danger">Cancelar</Link>
            </div>
          </Row>
        </Form>
      </Pagina>
    </div>

  );
};

export default form;

import React from "react";
import Pagina from "@/components/Pagina";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";
import styles from "../../styles/index.module.css"
import axios from "axios";
import Link from "next/link";
import disciplinaValidator from "@/validator/disciplinaValidator";


const form = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post('/api/disciplinas', dados)
    push('/disciplinas')
  }

  return (
    <>
    <div className={styles.cover}>
      <Pagina titulo="Disciplina">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="nome">
            <Form.Label><strong>Nome: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.nome}   
              type="text"
              placeholder="Insira o nome da disciplina:"
              {...register("nome", disciplinaValidator.nome)}
            />
            {errors.nome && <span className="error-message bg-primary text-white">{errors.nome.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="curso">
            <Form.Label><strong>Curso: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.curso}
              type="text"
              placeholder="Insira o nome do curso:"
              {...register("curso", disciplinaValidator.curso)}
            />
            {errors.curso && <span className="error-message bg-primary text-white">{errors.curso.message}</span>}
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2" /> Salvar
            </Button>
            <Link href="/disciplinas" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack className="me-2"/> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </div>
    </>
  );
};

export default form;

import Pagina from '@/components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import eventoValidator from '@/validators/eventoValidator'
import { mask } from 'remask';


const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue} = useForm()

    function salvar(dados) {
        const eventos = JSON.parse(window.localStorage.getItem('eventos')) || []
        eventos.push(dados)
        window.localStorage.setItem('eventos', JSON.stringify(eventos))
        push('/eventos')
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const mascara = event.target.getAttribute('mask');
        setValue(name, mask(value, mascara));
      }

    return (
        <Pagina titulo="evento">
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='insira seu nome:' 
                    {...register('nome', eventoValidator.nome)} 
                    isInvalid={errors.nome}/>
                    {
                        errors.nome &&
                        <small className='error-message bg-danger text-white'>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='Insira a descricao:' 
                    {...register('descricao', eventoValidator.descricao)}  
                    isInvalid={errors.descricao}/>
                    {
                        errors.descricao &&
                        <small className='error-message bg-danger text-white'>{errors.descricao.message}</small>
                    }
                </Form.Group>

            <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data: </Form.Label>
                    <Form.Control 
                    mask="99/99/9999"
                    type="text" 
                    placeholder='insira a data:' 
                    {...register('data', eventoValidator.data)}
                    onChange={handleChange} 
                    isInvalid={errors.data}/>
                    
                    {
                        errors.data &&
                        <small className='error-message bg-danger text-white'>{errors.data.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="uf">
                    <Form.Label>UF: </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder='Insira a UF:' 
                    {...register('uf', eventoValidator.uf)}  
                    isInvalid={errors.uf}/>
                    {
                        errors.uf &&
                        <small className='error-message bg-danger text-white'>{errors.uf.message}</small>
                    }
                </Form.Group>
               

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/eventos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form
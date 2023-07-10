import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [eventos, seteventos] = useState([])

    useEffect(() => {
        seteventos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('eventos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('eventos', JSON.stringify(itens))
            seteventos(itens)
        }
    }

    return (
        <Pagina titulo="eventos">

            <Link href="/eventos/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>UF</th>
                    </tr>
                </thead>
                <tbody>
                    {eventos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/eventos/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.data}</td>
                            <td>{item.uf}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
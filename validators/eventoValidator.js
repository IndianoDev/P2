const eventoValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'o mínimo é 3'
        },
        maxLength: {
            value: 45,
            message: 'o máximo é 45'
        },
    },
    descricao: {
        maxLength: {
            value: 45,
            message: 'o máximo é 45'
        },
    },
    data: {
            required: 'Campo Obrigatório',
            
            pattern: {
                value: /[0-9]+$/,
                message: "Digite somente números!",
              },
            
        },
    

    uf:{
        required: 'Campo Obrigatório',
        minLength: {
            value: 2,
            message: 'o mínimo é 2'
        },
        maxLength:{
            value: 2,
            message: 'o máximo é 2'
        }
    }
}
export default eventoValidator

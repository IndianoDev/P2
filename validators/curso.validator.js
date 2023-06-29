const cursoValidator = {
    nome: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 80,
        message: 'o máximo é 80'
      },
    },
  
    duracao: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 1,
        message: 'o mínimo é 1'
      },
      maxLength: {
        value: 2,
        message: 'o máximo é 2'
      },
    },
  
    modalidade: {
      required: 'Campo Obrigatório', 
      minLength: {
        value: 3,
        message: 'o mínimo é 3'
      },
      maxLength: {
        value: 10,
        message: 'o máximo é 10'
      },
    },
  }
  
  export default cursoValidator
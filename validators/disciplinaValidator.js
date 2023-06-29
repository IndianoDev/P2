const disciplinaValidator = {

  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 4,
      message: "Mínimo: 4 caracteres!",
    },
    maxLength: {
      value: 51,
      message: "Máximo: 51 caracteres!",
    },
    pattern: {
      
      message: "Digite somente letras!",
    },
  },

  curso: {
    required: "Campo obrigatório!",
    minLength: {
      value: 3,
      message: "Mínimo: 3 caracteres!",
    },
    maxLength: {
      value: 40,
      message: "Máximo: 40 caracteres!",
    },
    pattern: {
     
      message: "Digite somente letras!",
    },
  },
};

export default disciplinaValidator;

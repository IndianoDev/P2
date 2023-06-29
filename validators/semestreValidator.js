const semestreValidator = {

  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 1,
      message: "Mínimo: 1 caracteres!",
    },
    maxLength: {
      value: 50,
      message: "Máximo: 50 caracteres!",
    },
  },

  datainicio: {
   required: 'Campo Obrigatório'
  },

  datafim: {
   required: 'Campo Obrigatório'
  },
};

export default semestreValidator;

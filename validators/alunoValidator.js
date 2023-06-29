const alunoValidator = {
  
  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 80,
      message: "Máximo: 80 caracteres!",
    },
   
  },

  cpf: {
    required: "Campo obrigatório!",
    maxLength: {
      value: 14,
      message: "Máximo: 14 caracteres!",
    },
  },

  matricula: {
    required: "Campo obrigatório!",
    minLength: {
      value: 8,
      message: "Mínimo: 8 caracteres!",
    },
    maxLength: {
      value: 11,
      message: "Máximo: 11 caracteres!",
    },
  },

  email: {
    required: "Campo obrigatório!",
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
   
  },

  telefone: {
    required: "Campo obrigatório!",
    maxLength: {
      value: 20,
      message: "Máximo: 20 caracteres!",
    },
  },

  cep: {
    required: "Campo obrigatório!",
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 12,
      message: "Máximo: 12 caracteres!",
    },
  },

  logradouro: {
    required: "Campo obrigatório!",
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
  },

  complemento: {
   
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 30,
      message: "Máximo: 30 caracteres!",
    },
  },

  numero: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 20,
      message: "Máximo: 20 caracteres!",
    },
  },

  bairro: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
  },
};

export default alunoValidator;

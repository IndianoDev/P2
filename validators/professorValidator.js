const professorValidator = {
  
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
      value: 11,
      message: "Máximo: 11 caracteres!",
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

  salario: {
    required: "Campo obrigatório!",
    minLength: {
      value: 4,
      message: "Mínimo: 4 caracteres!",
    },
    maxLength: {
      value: 8,
      message: "Máximo: 8 caracteres!",
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
    minLength: {
      value: 8,
      message: "Mínimo: 8 caracteres!",
    },
    maxLength: {
      value: 15,
      message: "Máximo: 15 caracteres!",
    },
    
  },

  cep: {
   
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 11,
      message: "Máximo: 11 caracteres!",
    },
   
  },

  logradouro: {
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

export default professorValidator;

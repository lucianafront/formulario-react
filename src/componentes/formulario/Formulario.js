import React, { Component } from 'react';

// Função de validação genérica<label for="cidade">Cidade:</label>
const validateField = (value) => {
  return value && value.length > 0;
};

// HOC para formulários
const withFormValidation = (WrappedComponent, validationRules) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {},
        errors: {},
        success: false
      };
    }

    // Função para atualizar o estado do formulário
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }));
    };

    // Função para validar o formulário
    handleSubmit = (e) => {
      e.preventDefault();
      const { formData } = this.state;
      let errors = {};
      let success = true;

      // Verificar cada regra de validação
      Object.keys(validationRules).forEach((fieldName) => {
        const rules = validationRules[fieldName];
        rules.forEach((rule) => {
          if (rule.isRequired && !validateField(formData[fieldName])) {
            errors[fieldName] = rule.errorMessage;
            success = false;
          }
          // Aqui você pode adicionar outras validações, como comprimento mínimo, formato de email, etc.
        });
      });

      // Atualizar o estado com erros e sucesso
      this.setState({ errors, success }, () => {
        if (success) {
          // Aqui você pode enviar os dados do formulário para o servidor
          console.log('Formulário válido, enviar dados:', formData);
        }
      });
    };

    render() {
      const { formData, errors, success } = this.state;

      return (
        <WrappedComponent
          formData={formData}
          errors={errors}
          success={success}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      );
    }
  };
};

// Componente de exemplo de formulário
const MyForm = ({ formData, errors, success, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nome:</label>
        <input type="text" id="username" name="username" value={formData.username || ''} onChange={handleChange} />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
      </div>
      <label htmlFor="idade">Idade:</label>
      <input type="text" id="idade" name="idade" value={formData.idade || ''} onChange={handleChange} />
      {errors.username && <span style={{ color: 'red' }}>{errors.idade}</span>}
      <div>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleChange} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <button type="submit">Enviar</button>
      {success && <p style={{ color: 'green' }}>Formulário enviado com sucesso!</p>}
    </form>
  );
};

// Regras de validação para o formulário de exemplo
const validationRules = {
  username: [{ isRequired: true, errorMessage: 'Nome de usuário é obrigatório' }],
  email: [{ isRequired: true, errorMessage: 'Email é obrigatório' }]
};

// Aplicar o HOC ao componente de formulário
const FormWithValidation = withFormValidation(MyForm, validationRules);

// Exemplo de uso do componente de formulário com validação
const App = () => {
  return (
    <div>
      <h1>Cadastro em Loja</h1>
      <FormWithValidation />
    </div>
  );
};

export default App;
import React, { useState } from "react";
import "./Formulario.css";


const Formulario = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [erros, setErro] = useState("");
  const [respostasAnteriores, setRespostasAnteriores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");

    if (
      !nome ||
      !idade ||
  
      !estadoCivil ||
  
      !documento
    ) {
      setErro("Preencha todos os campos!");
      return;
    }

    const respostaFormulario = {
      nome,
      idade,
      genero,
      estadoCivil,
      tipoDocumento,
      documento,
    };
    setRespostasAnteriores([...respostasAnteriores, respostaFormulario]);
    setNome("");
    setIdade("");
    setGenero("");
    setEstadoCivil("");
    setTipoDocumento("");
    setDocumento("");
  };

  return (
    <div className="container">
      <div>
        <h3>{erros}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            Idade:
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </label>
          <label>
            Gênero:
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </label>
          <label>
            Estado Civil:
            <input
              type="text"
              value={estadoCivil}
              onChange={(e) => setEstadoCivil(e.target.value)}
            />
          </label>
          <label>
            Tipo de Documento:
            <select
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
            >
              <option value="CPF">CPF</option>
              <option value="CNPJ">CNPJ</option>
            </select>
          </label>
          <label>
            {tipoDocumento === "CPF" ? "CPF:" : "CNPJ:"}
            <input
              type="text"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        <div>
          <h2>Respostas Anteriores:</h2>
          {respostasAnteriores.map((resposta, index) => (
            <div key={index}>
              <p>{JSON.stringify(resposta)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /*
  return (
    <div>
      <form>
        <label for="nome">Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label for="idade">Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <label for="genero">Gênero:</label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>

        <label for="estadoCivil">Estado Civil:</label>
        <input
          type="text"
          value={estadoCivil}
          onChange={(e) => setEstadoCivil(e.target.value)}
        />

        <label for="tipoDocumento">Tipo de Documento:</label>
        <select
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
        >
          <option value="cpf">CPF</option>
          <option value="cnpj">CNPJ</option>
        </select>
        <input
          type="text"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Respostas Anteriores:</h2>
        {respostasAnteriores.map((resposta, index) => (
          <div key={index}>
            <p>{JSON.stringify(resposta)}</p>
          </div>
        ))}
      </div>
    </div>
  );

  */
};

export default Formulario;

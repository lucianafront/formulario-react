import React, { useState } from "react";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("outro");
  const [estadoCivil, setEstadoCivil] = useState("solteiro");
  const [tipoDocumento, setTipoDocumento] = useState("Rg");
  const [documento, setDocumento] = useState("");
  const [erros, setErro] = useState("");
  const [respostasAnteriores, setRespostasAnteriores] = useState([]);



const handleDelete = (index) => {
    console.log(index);
    const updatedRespostas = [...respostasAnteriores];
    updatedRespostas.splice(index, 1);
    setRespostasAnteriores(updatedRespostas);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");


    if (
      !nome ||
      !idade ||
      !genero ||
      !estadoCivil ||
      !tipoDocumento ||
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
    console.log(respostaFormulario);


    setRespostasAnteriores([...respostasAnteriores, respostaFormulario]);
    setNome("");
    setIdade("");
    setGenero("outro");
  setEstadoCivil("solteiro");
  setTipoDocumento("Rg");
    setDocumento("");
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-12">
          <h1>Formulário</h1>
        </div>
      </div>
       
       {erros && <div className="row mt-4"><div className="col-12 text-bg-danger p-1"><h3 className="bs-danger-text-emphasis">{erros}</h3></div></div>} 


      <div className="row mt-5">
        <div className="col-5">
          <form className="container" onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="nome" className="col-sm-4 col-form-label">
                Nome
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="idade" className="col-sm-4 col-form-label">
                Idade
              </label>
              <div className="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  value={idade}
              onChange={(e) => setIdade(e.target.value)}
                  placeholder="Idade"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="genero" className="col-sm-4 col-form-label">
                Gênero
              </label>
              <div className="col-sm-8">
              <select className="form-control" value={genero} onChange={(e) => setGenero(e.target.value)} >
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="estadoCivil" className="col-sm-4 col-form-label">
                Estado Civil
              </label>
              <div className="col-sm-8">
              <select className="form-control" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} >
                  <option value="solteiro">Solteiro</option>
                  <option value="casado">Casado</option>
                  <option value="divorciado">Divorciado</option>
                  <option value="viuvo">Viúvo</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="tipoDocumento" className="col-sm-4 col-form-label">
                Tipo de Documento
              </label>
              <div className="col-sm-8">
              <select className="form-control" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} >
                  <option value="Rg">RG</option>
                  <option value="Cpf">CPF</option>
                  <option value="Passaporte">Passaporte</option>
                </select>
              </div>
            </div>
            {tipoDocumento !== '' && (
                <div className="form-group row">
              <label htmlFor="documento" className="col-sm-4 col-form-label">
              Número do {tipoDocumento}
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                  placeholder="Documento"
                />
              </div>
            </div>
            )}
       
            <div className="form-group row">
              <div className="col-sm-8 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-7">
          {respostasAnteriores.length > 0 && (
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Gênero</th>
                    <th>Estado Civil</th>
                    <th>Tipo de Documento</th>
                    <th>Documento</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {respostasAnteriores.map((resposta, index) => (
                    <tr key={index}>
                      <td>{resposta.nome}</td>
                      <td>{resposta.idade}</td>
                      <td>{resposta.genero}</td>
                      <td>{resposta.estadoCivil}</td>
                      <td>{resposta.tipoDocumento}</td>
                      <td>{resposta.documento}</td>
                      <td>
                    <button class="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
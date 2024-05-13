import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("outro");
  const [estadoCivil, setEstadoCivil] = useState("solteiro");
  const [tipoDocumento, setTipoDocumento] = useState("Rg");
  const [documento, setDocumento] = useState("");
  const [erros, setErro] = useState("");
  const [respostasAnteriores, setRespostasAnteriores] = useState([]);

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleDelete = (index) => {
    const updatedRespostas = [...respostasAnteriores];
    updatedRespostas.splice(index, 1);
    setRespostasAnteriores(updatedRespostas);
  };

  const handleShowModal = (resposta) => {
    setModalData(resposta);
    setShow(true);
  };

  const ordenarRespostas = () => {
    const sortedRespostas = [...respostasAnteriores].sort((a, b) => {
      if (a.nome < b.nome) {
        return -1;
      }
      if (a.nome > b.nome) {
        return 1;
      }
      return 0;
    });
    setRespostasAnteriores(sortedRespostas);
  };

  const ordenarPorIdade = () => {
    const sortedRespostas = [...respostasAnteriores].sort((a, b) => {
      return a.idade - b.idade;
    });
    setRespostasAnteriores(sortedRespostas);
  };

  const ordenarPorGenero = () => {
    const sortedRespostas = [...respostasAnteriores].sort((a, b) => {
      if (a.genero < b.genero) {
        return -1;
      }
      if (a.genero > b.genero) {
        return 1;
      }
      return 0;
    });
    setRespostasAnteriores(sortedRespostas);
  };

  const ordenarPorEstadoCivel = () => {
    const sortedRespostas = [...respostasAnteriores].sort((a, b) => {
      if (a.estadoCivil < b.estadoCivil) {
        return -1;
      }
      if (a.estadoCivil > b.estadoCivil) {
        return 1;
      }
      return 0;
    });
    setRespostasAnteriores(sortedRespostas);
  };

  const ordenarPorTipoDoc = () => {
    const sortedRespostas = [...respostasAnteriores].sort((a, b) => {
      if (a.tipoDocumento < b.tipoDocumento) {
        return -1;
      }
      if (a.tipoDocumento > b.tipoDocumento) {
        return 1;
      }
      return 0;
    });
    setRespostasAnteriores(sortedRespostas);
  };

  const ordenarPorDoc = () => {
    const sortedRespostas = [...respostasAnteriores].sort((a, b) => {
      if (a.documento < b.documento) {
        return -1;
      }
      if (a.documento > b.documento) {
        return 1;
      }
      return 0;
    });
    setRespostasAnteriores(sortedRespostas);
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

    setRespostasAnteriores([...respostasAnteriores, respostaFormulario]);
    setNome("");
    setIdade("");
    setGenero("outro");
    setEstadoCivil("solteiro");
    setTipoDocumento("Rg");
    setDocumento("");
  };

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);
  const loadDataOnlyOnce = () => {
    const respostasExemplo = [
      {
        nome: "João",
        idade: 25,
        genero: "masculino",
        estadoCivil: "solteiro",
        tipoDocumento: "Rg",
        documento: "123456789",
      },
      {
        nome: "Maria",
        idade: 30,
        genero: "feminino",
        estadoCivil: "casado",
        tipoDocumento: "Cpf",
        documento: "987654321",
      },
      {
        nome: "Pedro",
        idade: 40,
        genero: "masculino",
        estadoCivil: "divorciado",
        tipoDocumento: "Rg",
        documento: "456789123",
      },
      {
        nome: "Ana",
        idade: 35,
        genero: "feminino",
        estadoCivil: "solteiro",
        tipoDocumento: "Cpf",
        documento: "321654987",
      },
      {
        nome: "Lucas",
        idade: 28,
        genero: "masculino",
        estadoCivil: "solteiro",
        tipoDocumento: "Rg",
        documento: "987123654",
      },
      {
        nome: "Julia",
        idade: 32,
        genero: "feminino",
        estadoCivil: "casado",
        tipoDocumento: "Cpf",
        documento: "654321987",
      },
      {
        nome: "Carlos",
        idade: 45,
        genero: "masculino",
        estadoCivil: "viuvo",
        tipoDocumento: "Rg",
        documento: "789456123",
      },
    ];

    setRespostasAnteriores([...respostasAnteriores, ...respostasExemplo]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Formulário</h1>
        </div>
      </div>

      {erros && (
        <div className="row mt-5">
          <div className="col text-bg-danger p-1">
            <h3 className="bs-danger-text-emphasis">{erros}</h3>
          </div>
        </div>
      )}

      <div className="row mt-5">
        <div className="col">
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
                <select
                  className="form-control"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                >
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
                <select
                  className="form-control"
                  value={estadoCivil}
                  onChange={(e) => setEstadoCivil(e.target.value)}
                >
                  <option value="solteiro">Solteiro</option>
                  <option value="casado">Casado</option>
                  <option value="divorciado">Divorciado</option>
                  <option value="viuvo">Viúvo</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="tipoDocumento"
                className="col-sm-4 col-form-label"
              >
                Tipo de Documento
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  value={tipoDocumento}
                  onChange={(e) => setTipoDocumento(e.target.value)}
                >
                  <option value="Rg">RG</option>
                  <option value="Cpf">CPF</option>
                  <option value="Passaporte">Passaporte</option>
                </select>
              </div>
            </div>
            {tipoDocumento !== "" && (
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
      </div>
      <div className="row mt-5">
        <div className="col">
          {respostasAnteriores.length > 0 && (
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th onClick={() => ordenarRespostas()}>Nome ⇵ </th>
                    <th onClick={() => ordenarPorIdade()}>Idade ⇵</th>
                    <th onClick={() => ordenarPorGenero()}>Gênero ⇵</th>
                    <th onClick={() => ordenarPorEstadoCivel()}>
                      Estado Civil ⇵
                    </th>
                    <th onClick={() => ordenarPorTipoDoc()}>
                      Tipo de Documento ⇵
                    </th>
                    <th onClick={() => ordenarPorDoc()}>Documento ⇵</th>
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
                        <button
                          alt="Detalhe"
                          className="btn btn-primary"
                          onClick={() => handleShowModal(resposta)}
                        >
                       🔍
                        </button>
                        <button
                          alt="Deletar"
                          className="btn btn-danger"
                          onClick={() => handleDelete(index)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nome: {modalData.nome}</p>
          <p>Idade: {modalData.idade}</p>
          <p>Gênero: {modalData.genero}</p>
          <p>Estado Civil: {modalData.estadoCivil}</p>
          <p>Tipo de Documento: {modalData.tipoDocumento}</p>
          <p>Documento: {modalData.documento}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Formulario;

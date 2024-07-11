/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { cpf, cnpj } from "cpf-cnpj-validator";
import Checkbox from "./components/Checkbox";
import Toggle from "./components/Toggle";
import Button from "./components/Button";

function App() {
  const [typeOperation, setTypeOperation] = useState("cpf");
  const [isFormat, setIsFormat] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const operations = {
    cpf: {
      generate: cpf.generate,
      format: cpf.format,
    },
    cnpj: {
      generate: cnpj.generate,
      format: cnpj.format,
    },
  };

  useEffect(() => {
    setInputValue(operations[typeOperation].generate(isFormat));
  }, [typeOperation]);

  function generateDocument() {
    const value = operations[typeOperation].generate(isFormat);
    setInputValue(value);
  }

  async function showAlert() {
    setIsAlert(true);
    await navigator.clipboard.writeText(inputValue);
    setTimeout(() => setIsAlert(false), 2500);
  }

  return (
    <>
      <div className="popup">
        <div className="popupContainer">
          <p className="popupTitle">Gerador de documento brasileiro</p>
          <p className="popupText">Selecione o tipo de documento</p>
          <div className="checkboxBox">
            <div className="poputCheckbox">
              <Checkbox
                label="CPF"
                onChange={() => setTypeOperation("cpf")}
                checked={typeOperation == "cpf"}
              />
            </div>
            <div className="poputCheckbox">
              <Checkbox
                label="CNPJ"
                onChange={() => setTypeOperation("cnpj")}
                checked={typeOperation == "cnpj"}
              />
            </div>
          </div>
          <div className="popupGenerationCheckbox">
            <Toggle
              Label="Formatado?"
              checked={isFormat}
              noChange={(e) => {
                setInputValue(
                  !isFormat
                    ? operations[typeOperation].format(inputValue)
                    : inputValue.replace(/\D/g, "")
                );
                setIsFormat(!isFormat);
              }}
            />
            <Button text="Gerar" onClick={() => generateDocument()} />
          </div>
          <div className="popupResponseBtnBox">
            <input
              type="search"
              id="search"
              className=""
              placeholder="Search"
              value={inputValue}
              required
              disabled
            />
            <Button text="Copiar" onClick={() => showAlert()} />
          </div>
          {isAlert && (
            <div className="popupAlert" role="alert">
              <span className="popupAlertText">Copiado com sucesso 😊</span>
            </div>
          )}
        </div>
        <span className="lastText">
          <a href="https://isaiassantana.com.br" target="_blank">
            Santana Web Developer
          </a>
        </span>
      </div>
    </>
  );
}

export default App;

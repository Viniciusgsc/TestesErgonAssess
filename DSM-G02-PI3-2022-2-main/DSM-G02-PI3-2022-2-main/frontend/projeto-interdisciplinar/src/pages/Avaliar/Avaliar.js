import React from "react";
import Header from "../../components/Header/header";
import imgavaliar from "../../img/avaliarimg.png"
import "./avaliar.css";

//Pagina Avaliação da Aplicação
export default function Questoes() {

  return (
    <div className="app">
      <Header />
      <div className="avaliar">
        <form>
        <h2>Nome da Avaliação</h2>
          <div className="avaliar-box">
            <input type="text" name="" required=""></input>
          </div>
          <div className="segmento-box">
            <input type="text" name="" required=""></input>
          </div>
        </form>
      </div>
      <img className="gg" src={imgavaliar}/>
    </div>
  );
}

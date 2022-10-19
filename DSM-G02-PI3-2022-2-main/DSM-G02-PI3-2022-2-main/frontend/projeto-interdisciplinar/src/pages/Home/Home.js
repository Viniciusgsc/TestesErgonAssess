import React from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Header from "../../components/Header/header";
import "./home.css";

//Pagina Home da Aplicação
export default function Home() {
  useEffect(() => {
    api
      .get("/question")
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log("deu errado");
      });
  });
  return (
    <div className="app">
      <Header />
      <h1 className="t">VOCE ESTA NA PAGINA PRINCIPAL</h1>
    </div>
  );
}

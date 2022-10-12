import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

//Header da aplicaçãõ
export default function Header() {
  return (
    <header>
      <div className="content">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Questoes">Questoes</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

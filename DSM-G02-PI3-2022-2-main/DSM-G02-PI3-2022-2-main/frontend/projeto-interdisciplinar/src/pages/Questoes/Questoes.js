import React from 'react';
import Header from '../../components/Header/header';

import './questoes.css';

//Pagina Questoes da Aplicação
export default function Questoes() {
    return (
        <div className='app'>
            <Header />
            <h1 className='h'>VOCE ESTA NA PAGINA QUESTOES</h1>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required=""></input>
                            <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""></input>
                            <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    )

}
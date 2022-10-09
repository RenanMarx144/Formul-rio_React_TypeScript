import React from "react";
import './style.css'
import { useLocation, useNavigate } from "react-router-dom";


const homeAside = require("../../assets/img/home-aside.webp") as string;
const logo = require("../../assets/img/logo.png") as string;


export function Home() {
    const navegate = useNavigate();
    function formulario() {
        navegate('/formulario')
    }
    return (
        <div id="home">
            <aside>
                <img src={homeAside} alt="" />
                <div className="content">
                    <strong>Formulário React com TypeScript</strong>
                    <p>O intuíto desse projeto apresentar um formulário basico com mascaras e validações.
                        Sempre que tenho uma entrevista vejo que os teste principais para front-end é a criação
                        de um formúlario, então resolvi criar um prejeto em React já aprensetando essa habilidade.
                    </p>
                    <p>Tel: 11 98158-9854</p>
                    <p>Zap: 11 96526-5705</p>
                </div>
            </aside>
            <main>
                <div className='home-main'>
                    <img src={logo} alt="" />
                    <div className="cad">
                        <button onClick={formulario} className='btn-form'>Formulário</button>
                        <hr />
                        <div className="outline"><p>ou veja o resultados gerados pelo formulário</p></div>
                        <button className='btn-result' onClick={() => { navegate('/Resultados') }}>Resultados</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
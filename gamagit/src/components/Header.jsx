import '../styles/header.css'
import React from "react"
import Lupa from '../assets/procurar.svg'
import MenuDrop from "../assets/botao-de-menu.svg"
import Login from "../assets/avatar.svg"
import Sacola from "../assets/bolsa-de-compras.svg"
import Favoritos from "../assets/coracao.svg"

// eslint-disable-next-line
export default props => {
    return (
        <nav>
            <div className="nav1">
                <ul className="container navInverter1">
                    <li className="nav-item">
                        <a href="/">
                            <img src={MenuDrop} alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <h1><strong>Carol</strong>Store</h1>
                    </li>
                    <form action="" className="form-inline">
                        <input className="search" type="search" placeholder="O que você precisa?" aria-label="Search" />
                        <button className="btn btnSearch" type="submit">
                            <img src={Lupa} alt="icone de busca" />
                        </button>
                    </form>
                    <ul className="icons">
                        <li className="nav-item">
                            <a href="/">
                                <img className="icon" src={Login} alt="icone de perfil" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/">
                                <img  className="iconBag" src={Sacola} alt="icone de bolsa de compras" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/">
                                <img  className="icon" src={Favoritos} alt="icone de favoritos" />
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
            <div className="nav2">
            <div className="container  navInverter2">
                    <div className="row">
                        <div className="containerDownNav">
                            <div className="col textInform1">
                              FRETE GRÁTIS | Nas compras acima de R$ 600,00
                            </div>
                            <div className="col textInform2">
                              SAC: (35) 99969-503 | Horário de Atendimento: Segunda a Sexta-feira das 8h às 17h.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
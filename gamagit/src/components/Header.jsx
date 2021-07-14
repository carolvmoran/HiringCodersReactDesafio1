import React from "react"
// eslint-disable-next-line
export default props => {
    return (
        <nav>
            <div className="nav1">
                <ul classname="container navInverter1">
                    <li className="nav-item">
                        <a href="/">
                            <img src="./assets/botao-de-menu.svg" alt="" />
                        </a>
                    </li>
                    <li className="nav-item"></li>
                    <form action="" className="form-inline"></form>
                    <ul className="icons">
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"></li>
                    </ul>
                </ul>
            </div>
            <div className="nav2">
                <div>
                    <div>
                        <div>
                            <div>
                                FRETE GRÁTIS | Nas compras acima de R$ 600,00
                            </div>
                            <div>
                                SAC: (35) 99969-503 | Horário de Atendimento: Segunda a Sexta-feira das 8h às 17h.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
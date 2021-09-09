import React, { Component } from "react";
import CardNota from "./CardNota";

 class ListaDeNotas extends Component {
    /* para o react rodar precisa passar a funcao render para ser renderizado */

    render() {
        return (
            <ul>
                <li>
                    <CardNota />
                </li>
                <li>
                    <CardNota/>
                </li>
            </ul>
        )
    }
}

export default ListaDeNotas;


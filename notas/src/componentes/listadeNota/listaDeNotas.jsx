import React, { Component } from "react";
import CardNota from "../cardNota";

class ListaDeNotas extends Component {
    /* para o react rodar precisa passar a funcao render para ser renderizado */


    /* cada elemento retornado precisa de uma chave, elemento key */
    render() {
        return (
            <ul>
                {Array.of("trabalho", "escola").map((categoria,index) => {
                    return (
                        <li key={index}>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );

                })}

            </ul>
        )
    }
}
/* map usada na funcao arrays,a callbacl precisa retorna um valor para 
    o map criar uma lista com esses valores
*/

export default ListaDeNotas;


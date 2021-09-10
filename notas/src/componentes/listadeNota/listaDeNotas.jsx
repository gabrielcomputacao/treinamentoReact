import React, { Component } from "react";
import CardNota from "../cardNota";

class ListaDeNotas extends Component {
    /* para o react rodar precisa passar a funcao render para ser renderizado */

   /*  constructor(props){
        super(props)
        o javascript cria esse construtor e passa as propriedades para o 
        elemento pai
    } */

    /* cada elemento retornado precisa de uma chave, elemento key */
    render() {
        return (
            <ul>
                {this.props.notas.map((nota,index) => {
                    return (
                        <li key={index}>
                            
                            <CardNota titulo={nota.titulo} texto={nota.texto}/>
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


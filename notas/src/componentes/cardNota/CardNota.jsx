import React, { Component } from "react";
import "./estiloNotas.css"

export default class CardNota extends Component {

    render() {
        return (
            <section className="nota">
                <header>
                    <h3>titulo</h3>
                </header>
                <p>escreve sua nota aqui</p>
            </section>
        )
    }
}

/* como o class ja é palavra reservada do react para criar classes extendendo 
do componentes, entao para atribuir classes as tags htmls que sao jsx coloca-se
className
*/


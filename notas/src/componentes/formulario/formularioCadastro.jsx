import React, { Component } from "react";


export default class FormularioCadastro extends Component {

    render() {
        return (
            <form>
                <input type="text" placeholder="titulo"></input>
                <textarea placeholder="escreva sua nota"></textarea>
                <button> Criar Nota</button>
            </form>
        )
    }

}

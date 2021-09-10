import React, { Component } from "react";


export default class FormularioCadastro extends Component {

    /* precisa usa  o super pois a classe extends de outra classe componente */
    constructor(props){
        super(props)
        this.titulo=""
        this.texto=""
    } 
    
    _MudancaTitulo(evento){
        this.titulo = evento.target.value
        console.log(this.titulo)
    }

    _EscrevendoTexto(evento){
       this.texto = evento.target.value 
    }

    _criandoNota(evento){
        evento.preventDefault();
        console.log(`uma nova nota foi criada ` + this.titulo +` e `+this.texto)
        this.props.criarNota(this.titulo,this.texto)
    }

    /* acao onchange e toda vez que mudar dentro de um objeto html ele
    ativa esse evento
    */

    render() {
        return (
            <form
            onSubmit={this._criandoNota.bind(this)}>
                <input type="text" 
                placeholder="titulo"
                onChange={this._MudancaTitulo.bind(this)}></input>
                <textarea 
                placeholder="escreva sua nota"
                onChange={this._EscrevendoTexto.bind(this)}></textarea>
                <button> Criar Nota</button>
            </form>
        )
    }

}

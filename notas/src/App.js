import React, { Component } from "react";
import FormularioCadastro from './componentes/formulario/formularioCadastro';
import ListaDeNotas from './componentes/listadeNota/listaDeNotas';

/* componente */
class App extends Component {


constructor(){
  super()
  /* setando o estado das notas dentro do state,maneira direta */
  this.state={
    notas:[]
  }

}


  criarNota(titulo, texto) {
    const novaNota = {titulo,texto}
    /* criar um novo array */
    let novoArrayNotas = [...this.state.notas,novaNota]
    /* fazer um novo estado */
    let novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  /*O formulario vai ter uma propriedade do react que esta sendo associada
  ao criar nota dentro da classe app, e com isso passa-se uma atributo para
  dentro da classecriar Nota do filho

  */
  render() {
    return (
      <div>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        {/* a propriedade do componente Listadenotas, vai pegar
        as lista de notas criadas no  app , pois ele e o pai, recebe um atributo
        do pai*/}
        <ListaDeNotas notas ={this.state.notas}/>
      </div>
    );
  }
}
export default App;

import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  professores: string[] = ["Rogerio", "Marion", "Luiz", "Edson", "Wilton"];

  remover(index: number){
    this.professores.splice(index, 1);
  }

  // ----- Tarefas ----- //

  tarefasBool : boolean = true;
  tarefasBotao : String = "Mostrar concluídas";

  // Usar apenas object[] -> deixa vago e genérico, pode dar erro ao reconhecer o tipo de cada campo
  lista: { id: number; nome: string; conceito: boolean }[] = [ // especifica o tipo de cada campo do objeto e evita erros
    {"id": 1, "nome":"Estudar", "conceito": true},
    {"id": 2, "nome": "Modificar o TCC", "conceito": false},
    {"id": 3, "nome": "Estudar Matematica", "conceito": true}]

    // Colocar o objeto direto no html não funciona, então a lista vai armazenar cada objeto em array e exibir
    listaFiltrada: { id: number; nome: string; conceito: boolean }[] = [];

    constructor(){
      this.listaFiltrada = this.lista; // Inicia exibindo tudo no html
    }

  exibirTarefas(){
    this.tarefasBool = !this.tarefasBool; // Cada clique muda/inverte a variável entre true e false

    if (this.tarefasBool){ // Caso seja true
      this.tarefasBotao = "Mostrar concluídas";
      this.listaFiltrada = this.lista; // Exibe a lista completa

    } else{ // Caso seja false
      this.tarefasBotao = "Mostrar tudo";
      // Filtra a lista e coloca em listaFiltrada os objetos com conceito = true, ou seja, concluídos
      this.listaFiltrada = this.lista.filter(item => item.conceito);
     }
  }
}

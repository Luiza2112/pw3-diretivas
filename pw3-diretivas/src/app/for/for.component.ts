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

  lista: object[] = [
    {"id": 1, "nome":"Estudar", "conceito": true},
    {"id": 2, "nome": "Modificar o TCC", "conceito": false},
    {"id": 3, "nome": "Estudar Matematica", "conceito": true}]

  tarefasBool:boolean = true;

  tarefas: String = "Mostrar tudo";

  exibirTarefas(){
    if (this.tarefasBool == true){
      this.tarefas == "Mostrar tudo";}
    else{
      this.tarefas == "Mostrar só as concluidas";
     }
     this.tarefasBool = false;
  }
}

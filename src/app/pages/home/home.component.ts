import { Alunos } from './../model/alunos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

  valor: number;
  exibeTabela: boolean = false;

  listaAlunos: Alunos[] = [
    {nome: 'Rodrigo', idade: 38, email: 'carlos.inhani@gmail.com', curso: 'Angular avançado'},
    {nome: 'Priscila', idade: 33, email: 'priscila33@yahoo.com', curso: 'Jornalismo'},
    {nome: 'Matheus', idade: 21, email: 'sera@gmail.com', curso: 'Análise de Sistemas'},
    {nome: 'Gabriel', idade: 23, email: 'ocaramagro@gmail.com', curso: 'Análise de Sistemas'},
  ]

  constructor() { }

  ngOnInit() {
    this.valor = 5;
  }

  mudarvalor(){
    this.valor++;
  }
  reiniciarValor(){
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }
}

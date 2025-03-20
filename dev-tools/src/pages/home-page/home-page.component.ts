import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PageBase } from '../pageBase';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent extends PageBase implements OnInit {
  ngOnInit(): void {
    // this.addDescription('As melhores ferramentas para desenvolvedores estão aqui!');
    this.title = 'DevToolz - Ferramentas para Desenvolvedores';
    this.description = 'DevToolz oferece ferramentas online úteis para desenvolvedores, como conversores, geradores e outras soluções para otimizar tarefas no desenvolvimento de software.';
    this.robots = 'index, follow';
    this.keywords = 'ferramentas para desenvolvedores, conversores online, conversor de tempo, gerador de CPF, gerador de CNPJ, utilitários para desenvolvimento de software, ferramentas úteis para desenvolvedores';
  }
}
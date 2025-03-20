import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageBase } from '../pageBase';

@Component({
  selector: 'remover-acento-texto-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './remover-acento-texto-page.component.html',
  styleUrl: './remover-acento-texto-page.component.scss'
})

export class RemoverAcentoTextoPageComponent extends PageBase implements OnInit {
  text: string = "";
  treatedText: string = "";

  onClick() {
    this.treatedText = this.text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  ngOnInit(): void {
    this.title = 'Remover Acentuação Online';
    this.description = 'Remova acentos de textos rapidamente com nossa ferramenta online. Transforme palavras acentuadas em versões sem acento com um clique.';
    this.robots = 'index, follow';
    this.keywords = 'remover acentuação, remover acentos online, converter texto sem acento, retirar acentos, remover caracteres especiais';
  }
}
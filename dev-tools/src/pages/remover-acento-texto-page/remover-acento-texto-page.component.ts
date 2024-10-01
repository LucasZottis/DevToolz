import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'remover-acento-texto-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './remover-acento-texto-page.component.html',
  styleUrl: './remover-acento-texto-page.component.scss'
})

export class RemoverAcentoTextoPageComponent {
  text: string = "";
  treatedText: string = "";

  onClick() {
    this.treatedText = this.text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
}
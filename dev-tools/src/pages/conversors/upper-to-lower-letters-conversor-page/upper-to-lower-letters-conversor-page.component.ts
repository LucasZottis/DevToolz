import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';

@Component({
  selector: 'upper-to-lower-letters-conversor-page',
  standalone: true,
  imports: [],
  templateUrl: './upper-to-lower-letters-conversor-page.component.html',
  styleUrl: './upper-to-lower-letters-conversor-page.component.scss'
})

export class UpperToLowerLettersConversorPageComponent extends PageBase implements OnInit {
  ngOnInit(): void {
    this.addDescription("Transformar textos para maiúsculas ou para minúsculas? Basta usar nossa ferramenta.")
  }
}
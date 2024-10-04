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
  text: string = "";

  private _convertToUpper(text: string): string {
    return text.toUpperCase();
  }

  private _convertToLower(text: string): string {
    return text.toLowerCase();
  }

  private _convertToAlternated(text: string): string {
    let convertedText: string = "";
    for(let i: number = 0; i < text.length; i++) {
      if (i % 2 == 0)
        convertedText += text[i].toLowerCase();
      else
        convertedText += text[i].toUpperCase();
    }

    return convertedText;
  }

  private _convertInvertedText(text: string): string {
    let convertedText: string = "";
    for(let i: number = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase())
        convertedText += text[i].toLowerCase();
      else
        convertedText += text[i].toUpperCase();
    }

    return convertedText;
  }
  
  ngOnInit(): void {
    this.addDescription("Transformar textos para maiúsculas ou para minúsculas? Basta usar nossa ferramenta.")
  }
}
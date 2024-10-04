import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'upper-to-lower-letters-conversor-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './upper-to-lower-letters-conversor-page.component.html',
  styleUrl: './upper-to-lower-letters-conversor-page.component.scss'
})

export class UpperToLowerLettersConversorPageComponent extends PageBase implements OnInit {
  text: string = "";
  to: number = 1;

  private _convertToUpper(text: string): string {
    return text.toUpperCase();
  }

  private _convertToLower(text: string): string {
    return text.toLowerCase();
  }

  private _convertToAlternated(text: string): string {
    let convertedText: string = "";
    for (let i: number = 0; i < text.length; i++) {
      if (i % 2 == 0)
        convertedText += text[i].toLowerCase();
      else
        convertedText += text[i].toUpperCase();
    }

    return convertedText;
  }

  private _convertInvertedText(text: string): string {
    let convertedText: string = "";
    for (let i: number = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase())
        convertedText += text[i].toLowerCase();
      else
        convertedText += text[i].toUpperCase();
    }

    return convertedText;
  }

  private _convertTo(text: string, to: number): string {
    switch (to) {
      case 1:
        return this._convertToUpper(text);
      case 2:
        return this._convertToLower(text);
      case 3:
        return this._convertToAlternated(text);
      case 4:
        return this._convertInvertedText(text);
    }

    return "";
  }

  onClickConvert(): void {
    this.text = this._convertTo(this.text, Number(this.to));
  }

  ngOnInit(): void {
    this.addDescription("Transformar textos para maiúsculas ou para minúsculas? Basta usar nossa ferramenta.")
  }
}
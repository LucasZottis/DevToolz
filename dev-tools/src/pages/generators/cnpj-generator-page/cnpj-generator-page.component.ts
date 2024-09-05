import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { PageBase } from '../../pageBase';
import { CnpjMaskDirective } from '../../../directives/cnpjMaskDirective';

@Component({
  selector: 'cnpj-generator-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './cnpj-generator-page.component.html',
  styleUrl: './cnpj-generator-page.component.scss'
})

export class CnpjGeneratorPageComponent extends PageBase implements OnInit {
  cnpj: string = "";
  masked: number = 0;

  private randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private removeMask(value: string): string {
    return value.replaceAll(".", "").replace("/", "").replace("-", "");
  }

  private count(value: string, searchedValue: string): number {
    let count = 0;

    value.split("").forEach(d => {
      if (d === searchedValue)
        count++;
    });

    return count;
  }

  private generateDigit(digits: string, initialValue: number): string {
    let resultado = 0;

    digits.split("").forEach(digit => {
      resultado += Number(digit) * initialValue;
      initialValue--;

      if (initialValue < 2)
        initialValue = 9;
    });

    var resto = resultado % 11;

    if (resto < 2)
      resultado = 0;
    else
      resultado = 11 - resto;

    return resultado.toString();
  }

  private generate(): void {
    this.cnpj = "";

    do {
      switch (this.cnpj.length) {
        case 2:
        case 6:
          if (this.count(this.cnpj, ".") < 2 && this.masked)
            this.cnpj += ".";
          break;
      }

      this.cnpj += this.randomIntFromInterval(0, 9);

    } while (this.removeMask(this.cnpj).length < 8)

    if (this.masked)
      this.cnpj += "/";

    this.cnpj += "0001";

    if (this.masked)
      this.cnpj += "-";

    this.cnpj += this.generateDigit(this.removeMask(this.cnpj), 5);
    this.cnpj += this.generateDigit(this.removeMask(this.cnpj), 6);
  }

  onClickGenerate(): void {
    this.generate();
  }

  onClickCopy(): void {
    if (this.cnpj !== "")
      navigator.clipboard.writeText(this.cnpj)
  }

  ngOnInit(): void {
    this.addDescription('Gerador de CNPJ fictício com opções para gerar com ou sem a máscara.');
    this.setTitle('Gerador de CNPJ');
  }
}
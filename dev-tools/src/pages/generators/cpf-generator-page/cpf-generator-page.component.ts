import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageBase } from '../../pageBase';

@Component({
  selector: 'cpf-generator-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cpf-generator-page.component.html',
  styleUrl: './cpf-generator-page.component.scss'
})

export class CpfGeneratorPageComponent extends PageBase implements OnInit {
  cpf: string = "";
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

    digits.split("").forEach(digito => {
      resultado += Number(digito) * initialValue--;
    });

    var resto = resultado % 11;

    if (resto < 2)
      resultado = 0;
    else
      resultado = 11 - resto;

    return resultado.toString();
  }

  private generate(): void {
    this.cpf = "";

    do {
      switch (this.cpf.length) {
        case 3:
        case 7:
          if (this.count(this.cpf, ".") < 2 && this.masked)
            this.cpf += ".";
          break;
      }

      this.cpf += this.randomIntFromInterval(0, 9);

    } while (this.removeMask(this.cpf).length < 9)

    if (this.masked)
      this.cpf += "-";

    this.cpf += this.generateDigit(this.removeMask(this.cpf), 10);
    this.cpf += this.generateDigit(this.removeMask(this.cpf), 11);
  }

  onClickGenerate(): void {
    this.generate();
  }

  onClickCopy(): void {
    if (this.cpf !== "")
      navigator.clipboard.writeText(this.cpf)
  }

  ngOnInit(): void {
    this.addDescription('Ferramenta para geração CPF aleatório válido.');
    this.setTitle('Gerador de CPF');
  }
}
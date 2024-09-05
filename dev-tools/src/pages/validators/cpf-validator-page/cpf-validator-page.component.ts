import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageBase } from '../../pageBase';
import { CpfMaskDirective } from '../../../directives/cpfMaskDirective';

@Component({
  selector: 'cpf-validator-page',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    CpfMaskDirective,
  ],
  templateUrl: './cpf-validator-page.component.html',
  styleUrl: './cpf-validator-page.component.scss'
})

export class CpfValidatorPageComponent extends PageBase implements OnInit {
  result?: string;
  style: string = "";
  cpf: string = "";

  private getFirstDigit(cpf: string): string {
    return cpf.split("")[9];
  }

  private getSecondDigit(cpf: string): string {
    return cpf.split("")[10];
  }

  private getDigits(cpf: string): string {
    return cpf.substr(0, 9);
  }

  private validateDigit(digits: string, validatorDigit: string, initialValue: number): boolean {
    let resultado = 0;

    digits.split("").forEach(digito => {
      resultado += Number(digito) * initialValue--;
    });

    var resto = resultado % 11;

    if (resto < 2)
      resultado = 0;
    else
      resultado = 11 - resto;

    return resultado == parseInt(validatorDigit);
  }

  private validateFirstDigit(cpf: string): boolean {
    return this.validateDigit(this.getDigits(cpf), this.getFirstDigit(cpf), 10);
  }

  private validateSecondDigit(cpf: string): boolean {
    return this.validateDigit(this.getDigits(cpf) + this.getFirstDigit(cpf), this.getSecondDigit(cpf), 11);
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

  ngOnInit(): void {
    this.addDescription('Faça a validação de CPF.');
    this.setTitle('Validação de CPF');
  }

  validate(): void {
    let formatoValido = (this.cpf !== null || this.cpf !== undefined);

    if (!formatoValido)
      return;

    let cpf = this.removeMask(this.cpf);

    if (this.validateFirstDigit(cpf) && this.validateSecondDigit(cpf)) {
      this.result = "Válido";
      this.style = "color: var(--primary-color)";
    } else {
      this.result = "Inválido";
      this.style = "color: red";
    }
  }

  onKeypress(e: KeyboardEvent) {
    if (Number.isNaN(Number(e.key)))
      e.preventDefault();
    else {
      let cpf = this.removeMask(this.cpf);

      switch (cpf.length) {
        case 3:
        case 6:
          if (this.count(this.cpf, ".") !== 2)
            this.cpf += ".";
          break;
        case 9:
          if (this.count(this.cpf, ".") !== 1)
            this.cpf += "-";
          break;
      }
    }
  }

  onPaste(args: ClipboardEvent) {
    this.cpf = "";
    let value = (args.clipboardData?.getData("text") ?? "");
    for (let index = 0; index < value.length; index++) {
      if (!Number.isNaN(Number(value[index])) && this.cpf.length < 14) {
        let cpf = this.removeMask(this.cpf);

        switch (cpf.length) {
          case 3:
          case 6:
            if (this.count(this.cpf, ".") !== 2)
              this.cpf += ".";
            break;
          case 9:
            if (this.count(this.cpf, ".") !== 1)
              this.cpf += "-";
            break;
        }

        this.cpf += value[index];
      }

    }

    args.preventDefault();
  }
}
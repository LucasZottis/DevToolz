import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageBase } from '../../pageBase';
import { CnpjMaskDirective } from '../../../directives/cnpjMaskDirective';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cnpj-validator-page',
  standalone: true,
  imports: [
    FormsModule,
    CnpjMaskDirective,
    NgIf,
  ],
  templateUrl: './cnpj-validator-page.component.html',
  styleUrl: './cnpj-validator-page.component.scss'
})
export class CnpjValidatorPageComponent extends PageBase implements OnInit {

  result?: string;
  style: string = "";
  cnpj: string = "";

  private getFirstDigit(cnpj: string): string {
    return cnpj.split("")[12];
  }

  private getSecondDigit(cnpj: string): string {
    return cnpj.split("")[13];
  }

  private getDigits(cnpj: string): string {
    return cnpj.substr(0, 12);
  }

  private validateDigit(digits: string, validatorDigit: string, initialValue: number): boolean {
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

    return resultado == parseInt(validatorDigit);
  }

  private validateFirstDigit(cnpj: string): boolean {
    return this.validateDigit(this.getDigits(cnpj), this.getFirstDigit(cnpj), 5);
  }

  private validateSecondDigit(cnpj: string): boolean {
    return this.validateDigit(this.getDigits(cnpj) + this.getFirstDigit(cnpj), this.getSecondDigit(cnpj), 6);
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
  
  private injetarDadosTabela(digitos: string, valorInicialContador: number, identificacao: string) {
    let corpoTabela = document.getElementById(identificacao);

    digitos.split("").forEach(digito => {
      let linha = "";

      linha += "<tr>";
      linha += '<td scope="col">' + Number(digito) + '</td>';
      linha += '<td scope="col">' + valorInicialContador + '</td>';
      linha += `<td scope="col">${Number(digito) * valorInicialContador}</td>`;
      linha += "</tr>";

      if (corpoTabela !== null)
        corpoTabela.innerHTML += linha;

      valorInicialContador--;

      if (valorInicialContador < 2)
        valorInicialContador = 9;
    });
  }

  private injetarResultadoModuloOnze(digitos: string, valorInicialContador: number, identificacao: string, complemento: string) {
    let html = document.getElementById(identificacao);
    let soma: number = 0;
    let digito = "";

    digitos.split("").forEach(digito => {
      soma += Number(digito) * valorInicialContador;
      valorInicialContador--;

      if (valorInicialContador < 2)
        valorInicialContador = 9;
    });

    if (digitos.length === 12) {
      let primeiroDigito = (soma % 11);

      if (primeiroDigito < 2)
        primeiroDigito = 0;
      else
        primeiroDigito = 11 - primeiroDigito;

      digito = primeiroDigito.toString();
    } else {
      let segundoDigito = (soma % 11);

      if (segundoDigito < 2)
        segundoDigito = 0;
      else
        segundoDigito = 11 - segundoDigito;

      digito = segundoDigito.toString();
    }

    if (html !== null)
      html.innerText += complemento.replace("{S}", soma.toString()).replace("{R}", digito);
  }

  private injetarSomaResultados(digitos: string, valorInicialContador: number, identificacao: string, complemento: string) {
    let html = document.getElementById(identificacao);
    let calculo = "";
    let soma = Number(0);
    let contador = 0;

    digitos.split("").forEach(digito => {
      calculo += Number(digito) * valorInicialContador;
      soma += Number(digito) * valorInicialContador;
      valorInicialContador--;

      if (contador < (digitos.length - 1))
        calculo += " + ";
      else
        calculo += " = " + soma;

      contador++;

      if (valorInicialContador < 2)
        valorInicialContador = 9;
    });

    if (html !== null)
      html.innerText = complemento + calculo;
  }

  private injetarDigito(injetarPrimeiroDigito: boolean, identificacao: string) {
    let html = document.getElementById(identificacao);

    if (html !== null) {
      if (injetarPrimeiroDigito)
        html.innerText += " " + 2;
      else
        html.innerText += " " + 1;
    }
  }

  ngOnInit(): void {
    this.injetarDadosTabela("760718080001", 2, "corpo-primeiro-digito");
    this.injetarDadosTabela("7607180800012", 1, "corpo-segundo-digito");

    this.injetarSomaResultados("760718080001", 2, "resultado-soma-primeiro-digito", "Em seguida, somamos os resultados: ");
    this.injetarSomaResultados("7607180800012", 1, "resultado-soma-segundo-digito", "Em seguida, somamos os resultados: ");

    this.injetarResultadoModuloOnze("760718080001", 2, "resultado-modulo-primeiro-digito", " O resto de {S} / 11 é {R}.");
    this.injetarResultadoModuloOnze("7607180800012", 1, "resultado-modulo-segundo-digito", " O resto de {S} / 11 é {R}.");
    this.injetarDigito(true, "primeiro-digito");
    this.injetarDigito(false, "segundo-digito");

    this.addDescription('Ferramenta para validação de CNPJ.');
  }

  validate(): void {
    let formatoValido = (this.cnpj !== null || this.cnpj !== undefined);

    if (!formatoValido)
      return;

    let cnpj = this.removeMask(this.cnpj);

    if (this.validateFirstDigit(cnpj) && this.validateSecondDigit(cnpj)) {
      this.result = "Válido";
      this.style = "color: var(--primary-color)";
    } else {
      this.result = "Inválido";
      this.style = "color: red";
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'numeric-systems-converter-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './numeric-systems-converter-page.component.html',
  styleUrl: './numeric-systems-converter-page.component.scss'
})

export class NumericSystemsConverterPageComponent extends PageBase implements OnInit {
  sourceValue: string = "";
  sourceLabel: string = "Binário";

  destinationValue: string = "";
  destinationLabel: string = "Binário";

  from: number = 1;
  to: number = 1;

  private _romanValues: [string, number][] = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  private _romanToDecimalValues: [string, number][] = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ];

  // Finds decimal value of a given 
  // roman numeral
  private _fromRoman(str: string): string {
    // Initialize result
    let res = 0;

    for (let i = 0; i < str.length; i++) {
      // Getting value of symbol s[i]
      let s1 = this._romanToDecimalValues.find(([char]) => char === str.charAt(i))?.[1] || 0;

      // Getting value of symbol s[i+1]
      if (i + 1 < str.length) {
        let s2 = this._romanToDecimalValues.find(([char]) => char === str.charAt(i + 1))?.[1] || 0;

        // Comparing both values
        if (s1 >= s2) {
          // Value of current symbol
          // is greater or equalto
          // the next symbol
          res = res + s1;
        }
        else {
          // Value of current symbol is
          // less than the next symbol
          res = res + s2 - s1;
          i++;
        }
      }
      else {
        res = res + s1;
      }
    }
    return res.toString();
  }

  private _toRoman(valueToConvert: number): string {
    let roman = "";

    for (let [romanChar, value] of this._romanValues) {
      while (valueToConvert >= value) {
        roman += romanChar;
        valueToConvert -= value;
      }
    }

    return roman;
  }

  //#region Binary

  private _binaryToOctal(binary: string): string {
    let octal = parseInt(binary, 2).toString(8);
    return octal;
  }

  private _binaryToDecimal(binary: string): string {
    let decimal = parseInt(binary, 2);
    return decimal.toString();
  }

  private _binaryToHex(binary: string): string {
    let hex = parseInt(binary, 2).toString(16);
    return hex;
  }

  private _binaryToSexa(binary: string): string {
    let decimal = this._binaryToDecimal(binary);

    return "";
  }

  private _binaryToRoman(binary: string): string {
    let decimal = this._binaryToDecimal(binary);
    return this._toRoman(Number(decimal));
  }

  private binaryTo(value: string, to: number): string {
    switch (to) {
      case 1:
        return value;
      case 2:
        return this._binaryToOctal(value);
      case 3:
        return this._binaryToDecimal(value);
      case 4:
        return this._binaryToHex(value);
      case 5:
        return this._binaryToSexa(value);
      case 6:
        return this._binaryToRoman(value);
    }

    return "";
  }

  //#endregion Binary

  //#region Octal

  private _octalToBinary(octal: string): string {
    let binary = parseInt(octal, 8).toString(2);
    return binary;
  }

  private _octalToDecimal(octal: string): string {
    let decimal = parseInt(octal, 8).toString();
    return decimal;
  }

  private _octalToHex(octal: string): string {
    let hex = parseInt(octal, 8).toString(16);
    return hex;
  }

  private _octalToSexa(octal: string): string {
    let hex = "";
    return hex;
  }

  private _octalToRoman(octal: string): string {
    let decimal = this._octalToDecimal(octal);
    return this._toRoman(Number(decimal));
  }

  private _octalTo(octal: string, to: number): string {
    switch (to) {
      case 1:
        return this._octalToBinary(octal);
      case 2:
        return octal;
      case 3:
        return this._octalToDecimal(octal);
      case 4:
        return this._octalToHex(octal);
      case 5:
        return this._octalToSexa(octal);
      case 6:
        return this._octalToRoman(octal);
    }

    return "";
  }

  //#endregion Octal

  //#region Decimal

  private _decimalToBinary(decimal: string): string {
    let binary = parseInt(decimal).toString(2);
    return binary;
  }

  private _decimalToOctal(decimal: string): string {
    let octal = parseInt(decimal).toString();
    return octal;
  }

  private _decimalToHex(decimal: string): string {
    let hex = parseInt(decimal).toString(16);
    return hex;
  }

  private _decimalToSexa(decimal: string): string {
    let sexa = "";
    return sexa;
  }

  private _decimalToRoman(decimal: string): string {
    let roman = this._toRoman(Number(decimal));
    return roman;
  }

  private _decimalTo(decimal: string, to: number): string {
    switch (to) {
      case 1:
        return this._decimalToBinary(decimal);
      case 2:
        return this._decimalToOctal(decimal);
      case 3:
        return decimal;
      case 4:
        return this._decimalToHex(decimal);
      case 5:
        return this._decimalToSexa(decimal);
      case 6:
        return this._decimalToRoman(decimal);
    }

    return "";
  }

  //#endregion Decimal

  //#region Hexadecimal

  private _hexToBinary(hex: string): string {
    let binary = parseInt(hex, 16).toString(2);
    return binary;
  }

  private _hexToOctal(hex: string): string {
    let octal = parseInt(hex, 16).toString();
    return octal;
  }

  private _hexToDecimal(hex: string): string {
    let decimal = parseInt(hex, 16).toString();
    return decimal;
  }

  private _hexToSexa(hex: string): string {
    let sexa = "";
    return sexa;
  }

  private _hexToRoman(hex: string): string {
    let decimal = this._hexToDecimal(hex);
    let roman = this._toRoman(Number(decimal));
    return roman;
  }

  private _hexTo(hex: string, to: number): string {
    switch (to) {
      case 1:
        return this._hexToBinary(hex);
      case 2:
        return this._hexToOctal(hex);
      case 3:
        return this._hexToDecimal(hex);
      case 4:
        return hex;
      case 5:
        return this._hexToSexa(hex);
      case 6:
        return this._hexToRoman(hex);
    }

    return "";
  }

  //#endregion Hexadecimal

  //#region Roman

  private _romanToBinary(roman: string): string {
    let decimal = this._romanToDecimal(roman);
    let binary = this._decimalToBinary(decimal);
    return binary;
  }

  private _romanToOctal(roman: string): string {
    let decimal = this._romanToDecimal(roman);
    let octal = this._decimalToOctal(decimal);
    return octal;
  }

  private _romanToDecimal(roman: string): string {
    let decimal = this._fromRoman(roman);
    return decimal;
  }

  private _romanToHex(roman: string): string {
    let decimal = this._romanToDecimal(roman);
    let hex = this._decimalToHex(decimal);
    return hex;
  }

  private _romanToSexa(roman: string): string {
    let sexa = "";
    return sexa;
  }

  private _romanTo(roman: string, to: number): string {
    switch (to) {
      case 1:
        return this._romanToBinary(roman);
      case 2:
        return this._romanToOctal(roman);
      case 3:
        return this._romanToDecimal(roman);
      case 4:
        return this._romanToHex(roman);
      case 5:
        return this._romanToSexa(roman);
      case 6:
        return roman;
    }

    return "";
  }

  //#endregion Roman

  private convert(value: string, from: number, to: number): string {
    switch (from) {
      case 1:
        return this.binaryTo(value, to);
      case 2:
        return this._octalTo(value, to);
      case 3:
        return this._decimalTo(value, to);
      case 4:
        return this._hexTo(value, to);
      case 6:
        return this._romanTo(value, to);
    }

    return "";
  }

  private getLabelValue(system: number): string {
    switch (system) {
      case 1:
        return "Binário";
      case 2:
        return "Octal";
      case 3:
        return "Decimal";
      case 4:
        return "Hexadecimal";
      case 5:
        return "Sexagesimal";
      case 6:
        return "Romano";
    }

    return "";
  }

  onChangeSource(): void {
    this.sourceLabel = this.getLabelValue(Number(this.from));
  }

  onChangeDestination(): void {
    this.destinationLabel = this.getLabelValue(Number(this.to));
  }

  onClickConvert(): void {
    this.destinationValue = this.convert(this.sourceValue, Number(this.from), Number(this.to));
  }

  ngOnInit(): void {
    this.addDescription("Página para conversão entre sistemas numéricos.");
  }
}
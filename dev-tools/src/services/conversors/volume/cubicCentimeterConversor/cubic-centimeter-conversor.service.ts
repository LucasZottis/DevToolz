import { Injectable } from '@angular/core';
import { LiterSystem } from '../../../../enums/literSystem';

@Injectable({
  providedIn: 'root'
})

export class CubicCentimeterConversorService {

  constructor() { }

  private _cubicCentimeterToMililiter(value: number): number {
    return value;
  }

  private _cubicCentimeterToCentiliter(value: number): number {
    return value / 10;
  }

  private _cubicCentimeterToDeciliter(value: number): number {
    return value / 100;
  }

  private _cubicCentimeterToLiter(value: number): number {
    return value / 1000;
  }

  private _cubicCentimeterToHectoliter(value: number): number {
    return value / 100000;
  }

  public convertToLiterSystem(value: number, to: LiterSystem): number {
    let result = 0;

    switch (to) {
      case LiterSystem.Mililiter:
        result = this._cubicCentimeterToMililiter(value);
        break;
      case LiterSystem.Centiliter:
        result = this._cubicCentimeterToCentiliter(value);
        break;
      case LiterSystem.Deciliter:
        result = this._cubicCentimeterToDeciliter(value);
        break;
      case LiterSystem.Liter:
        result = this._cubicCentimeterToLiter(value);
        break;
      case LiterSystem.Hectoliter:
        result = this._cubicCentimeterToHectoliter(value);
        break;
    }

    return result;
  }
}
import { Injectable } from '@angular/core';
import { LiterSystem } from '../../../../enums/literSystem';

@Injectable({
  providedIn: 'root'
})
export class HectoliterConversorService {

  constructor() { }

  private _toMililiter(value: number): number {
    return value * 1000;
  }

  private _toCentiliter(value: number): number {
    return value * 100;
  }

  private _toDeciliter(value: number): number {
    return value * 10;
  }

  private _toLiter(value: number): number {
    return value * 100;
  }

  private _toHectoliter(value: number): number {
    return value;
  }

  convertToLiterSystem(value: number, to: LiterSystem): number {
    let result = 0;

    switch (to) {
      case LiterSystem.Mililiter:
        result = this._toMililiter(value);
        break;
      case LiterSystem.Centiliter:
        result = this._toCentiliter(value);
        break;
      case LiterSystem.Deciliter:
        result = this._toDeciliter(value);
        break;
      case LiterSystem.Liter:
        result = this._toLiter(value);
        break;
      case LiterSystem.Hectoliter:
        result = this._toHectoliter(value);
        break;
    }

    return result;
  }
}

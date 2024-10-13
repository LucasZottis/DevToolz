import { Injectable } from '@angular/core';
import { LiterSystem } from '../../../../../enums/literSystem';
import { MetricSystem } from '../../../../../enums/metricSystem';

@Injectable({
  providedIn: 'root'
})
export class CubicMeterConversorService {

  constructor() { }

  //#region Liter System

  private _toMililiter(value: number): number {
    return value * 1000000;
  }

  private _toCentiliter(value: number): number {
    return value * 100000;
  }

  private _toDeciliter(value: number): number {
    return value * 10000;
  }

  private _toLiter(value: number): number {
    return value * 1000;
  }

  private _toHectoliter(value: number): number {
    return value * 10;
  }

  //#endregion Liter System

  //#region Metric System

  private _toCubicMilimeter(value: number): number {
    return value * 1000000000;
  }

  private _toCubicCentimeter(value: number): number {
    return value * 1000000;
  }

  private _toCubicDecimeter(value: number): number {
    return value * 1000;
  }

  private _toCubicMeter(value: number): number {
    return value;
  }

  private _toCubicKilometer(value: number): number {
    return value / 1000000000;
  }

  //#endregion Metric System

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

  convertToMetricSystem(value: number, to: MetricSystem): number {
    let result = 0;

    switch (to) {
      case MetricSystem.milimiter:
        result = this._toCubicMilimeter(value);
        break;
      case MetricSystem.decimeter:
        result = this._toCubicDecimeter(value);
        break;
      case MetricSystem.centimeter:
        result = this._toCubicCentimeter(value);
        break;
      case MetricSystem.meters:
        result = this._toCubicMeter(value);
        break;
      case MetricSystem.kilometers:
        result = this._toCubicKilometer(value);
        break;
    }

    return result;
  }
}

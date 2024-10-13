import { Injectable } from '@angular/core';
import { LiterSystem } from '../../../../../enums/literSystem';
import { MetricSystem } from '../../../../../enums/metricSystem';

@Injectable({
  providedIn: 'root'
})

export class CubicCentimeterConversorService {

  constructor() { }

  //#region Liter System

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

  //#endregion Liter System

  //#region Metric System

  private _toCubicMilimeter(value: number): number {
    return value * 1000;
  }

  private _toCubicCentimeter(value: number): number {
    return value;
  }

  private _toCubicDecimeter(value: number): number {
    return value / 1000;
  }

  private _toCubicMeter(value: number): number {
    return value / 1000000;
  }

  private _toCubicKilometer(value: number): number {
    return value / Math.pow(10, 15);
  }

  //#endregion Metric System

  convertToLiterSystem(value: number, to: LiterSystem): number {
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

  convertToMetricSystem(value: number, to: MetricSystem) {
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
import { Injectable } from '@angular/core';
import { MetricSystem } from '../../../../../enums/metricSystem';

@Injectable({
  providedIn: 'root'
})
export class PicometerConversorService {

  constructor() { }

  //#region Metric System

  private _picometerToPicometer(value: number): number {
    return value;
  }

  private _picometerToNanometer(value: number): number {
    return value / 1000;
  }

  private _picometerToMicrometer(value: number): number {
    return value / 1000000;
  }

  private _picometerToMilimeter(value: number): number {
    return value / 1000;
  }

  private _picometerToCentimeter(value: number): number {
    return value / 10000;
  }

  private _picometerToDecimeter(value: number): number {
    return value / 100000;
  }

  private _picometerToMeters(value: number): number {
    return value / 1000000;
  }

  private _picometerToKilometers(value: number): number {
    return value / 1000000000;
  }

  //#endregion Metric System

  toMetricSystem(value: number, to: MetricSystem): number {
    switch (to) {
      case MetricSystem.picometer:
        return this._picometerToPicometer(value);
      case MetricSystem.nanometer:
        return this._picometerToNanometer(value);
      case MetricSystem.micrometer:
        return this._picometerToMicrometer(value);
      case MetricSystem.milimiter:
        return this._picometerToMilimeter(value);
      case MetricSystem.centimeter:
        return this._picometerToCentimeter(value);
      case MetricSystem.decimeter:
        return this._picometerToDecimeter(value);
      case MetricSystem.meter:
        return this._picometerToMeters(value);
      case MetricSystem.kilometer:
        return this._picometerToKilometers(value);
      default:
        return value;
    }
  }
}
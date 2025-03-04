import { Injectable } from '@angular/core';
import { MetricSystem } from '../../../../../enums/metricSystem';

@Injectable({
  providedIn: 'root'
})
export class NanometerConversorService {

  constructor() { }

  //#region Metric System

  private _nanometerToPicometer(value: number): number {
    return value * 1000;
  }

  private _nanometerToNanometer(value: number): number {
    return value;
  }

  private _nanometerToMicrometer(value: number): number {
    return value / 1000;
  }

  private _nanometerToMilimeter(value: number): number {
    return value / 1000000000;
  }

  private _nanometerToCentimeter(value: number): number {
    return value / 10000000000;
  }

  private _nanometerToDecimeter(value: number): number {
    return value / 100000000000;
  }

  private _nanometerToMeters(value: number): number {
    return value / 1000000000000;
  }

  private _nanometerToKilometers(value: number): number {
    return value / Math.pow(10, 15);
  }

  //#endregion Metric System

  toMetricSystem(value: number, to: MetricSystem): number {
    switch (to) {
      case MetricSystem.picometer:
        return this._nanometerToPicometer(value);
      case MetricSystem.nanometer:
        return this._nanometerToNanometer(value);
      case MetricSystem.micrometer:
        return this._nanometerToMicrometer(value);
      case MetricSystem.milimiter:
        return this._nanometerToMilimeter(value);
      case MetricSystem.centimeter:
        return this._nanometerToCentimeter(value);
      case MetricSystem.decimeter:
        return this._nanometerToDecimeter(value);
      case MetricSystem.meter:
        return this._nanometerToMeters(value);
      case MetricSystem.kilometer:
        return this._nanometerToKilometers(value);
      default:
        return value;
    }
  }
}
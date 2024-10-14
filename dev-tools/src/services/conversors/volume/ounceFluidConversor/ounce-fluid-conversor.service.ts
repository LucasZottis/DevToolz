import { Injectable } from '@angular/core';
import { LiterSystem } from '../../../../enums/literSystem';
import { MetricSystem } from '../../../../enums/metricSystem';
import { MililiterConversorService } from '../literSystem/mililiterConversor/mililiter-conversor.service';
import { CentiliterConversorService } from '../literSystem/centiliterConversor/centiliter-conversor.service';

@Injectable({
  providedIn: 'root'
})
export class OunceFluidConversorService {

  constructor(
    private _centiliterConversor: CentiliterConversorService,
    private _mililiterConversor: MililiterConversorService,
  ) { }

  //#region Liter System

  private _toMililiter(value: number): number {
    return value * 29.5735295625;
  }

  private _toCentiliter(value: number): number {
    return value * 2.95735295625;
  }

  private _toDeciliter(value: number): number {
    return this._centiliterConversor.convertToLiterSystem(this._toCentiliter(value), LiterSystem.Deciliter);
  }

  private _toLiter(value: number): number {
    return this._centiliterConversor.convertToLiterSystem(this._toCentiliter(value), LiterSystem.Liter);
  }

  private _toHectoliter(value: number): number {
    return this._centiliterConversor.convertToLiterSystem(this._toCentiliter(value), LiterSystem.Hectoliter);
  }

  //#endregion Liter System

  //#region Metric System

  private _toCubicMilimeter(value: number): number {
    return value * 29573.5295625;
  }

  private _toCubicCentimeter(value: number): number {
    return this._mililiterConversor.convertToMetricSystem(this._toMililiter(value), MetricSystem.centimeter);
  }

  private _toCubicDecimeter(value: number): number {
    return this._mililiterConversor.convertToMetricSystem(this._toMililiter(value), MetricSystem.decimeter);
  }

  private _toCubicMeter(value: number): number {
    return this._mililiterConversor.convertToMetricSystem(this._toMililiter(value), MetricSystem.meters);
  }

  private _toCubicKilometer(value: number): number {
    return this._mililiterConversor.convertToMetricSystem(this._toMililiter(value), MetricSystem.kilometers);
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
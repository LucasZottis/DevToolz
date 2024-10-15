import { Injectable } from '@angular/core';
import { LiterSystem } from '../../../../enums/literSystem';
import { MetricSystem } from '../../../../enums/metricSystem';
import { CentiliterConversorService } from '../literSystem/centiliterConversor/centiliter-conversor.service';
import { MililiterConversorService } from '../literSystem/mililiterConversor/mililiter-conversor.service';

@Injectable({
  providedIn: 'root'
})
export class ImperialOunceFluidConversorService {

  constructor(
    private _milimiterConversor: MililiterConversorService,
    private _mililiterConversor: MililiterConversorService,
  ) { }

  //#region Liter System

  private _toMililiter(value: number): number {
    return value * 28.4130625;
  }

  private _toCentiliter(value: number): number {
    return this._mililiterConversor.convertToLiterSystem(this._toMililiter(value), LiterSystem.Centiliter);
  }

  private _toDeciliter(value: number): number {
    return this._mililiterConversor.convertToLiterSystem(this._toMililiter(value), LiterSystem.Deciliter);
  }

  private _toLiter(value: number): number {
    return this._mililiterConversor.convertToLiterSystem(this._toMililiter(value), LiterSystem.Liter);
  }

  private _toHectoliter(value: number): number {
    return this._mililiterConversor.convertToLiterSystem(this._toMililiter(value), LiterSystem.Hectoliter);
  }

  //#endregion Liter System

  //#region Metric System

  private _toCubicMilimeter(value: number): number {
    return value * 28413.0625;
  }

  private _toCubicCentimeter(value: number): number {
    return this._milimiterConversor.convertToMetricSystem(this._toCubicMilimeter(value), MetricSystem.centimeter);
  }

  private _toCubicDecimeter(value: number): number {
    return this._milimiterConversor.convertToMetricSystem(this._toCubicMilimeter(value), MetricSystem.decimeter);
  }

  private _toCubicMeter(value: number): number {
    return this._milimiterConversor.convertToMetricSystem(this._toCubicMilimeter(value), MetricSystem.meter);
  }

  private _toCubicKilometer(value: number): number {
    return this._milimiterConversor.convertToMetricSystem(this._toCubicMilimeter(value), MetricSystem.kilometer);
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
      case MetricSystem.meter:
        result = this._toCubicMeter(value);
        break;
      case MetricSystem.kilometer:
        result = this._toCubicKilometer(value);
        break;
    }

    return result;
  }

  toOunceFluid(value: number): number {
    return value * 0.96075994040388;
  }
}
import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { MililiterConversorService } from '../../../services/conversors/volume/literSystem/mililiterConversor/mililiter-conversor.service';
import { CentiliterConversorService } from '../../../services/conversors/volume/literSystem/centiliterConversor/centiliter-conversor.service';
import { DeciliterConversorService } from '../../../services/conversors/volume/literSystem/deciliterConversor/deciliter-conversor.service';
import { LiterConversorService } from '../../../services/conversors/volume/literSystem/literConversor/liter-conversor.service';
import { HectoliterConversorService } from '../../../services/conversors/volume/literSystem/hectoliterConversor/hectoliter-conversor.service';
import { CubicCentimeterConversorService } from '../../../services/conversors/volume/metricSystem/cubicCentimeterConversor/cubic-centimeter-conversor.service';
import { LiterSystem } from '../../../enums/literSystem';
import { MetricSystem } from '../../../enums/metricSystem';
import { CubicMilimeterConveresorService } from '../../../services/conversors/volume/metricSystem/cubicMilimeterConveresor/cubic-milimeter-converesor.service';
import { CubicDecimeterConversorService } from '../../../services/conversors/volume/metricSystem/cubicDecimeterConversor/cubic-decimeter-conversor.service';
import { CubicMeterConversorService } from '../../../services/conversors/volume/metricSystem/cubicMeterConversor/cubic-meter-conversor.service';

@Component({
  selector: 'volume-conversor-page',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
  ],
  templateUrl: './volume-conversor-page.component.html',
  styleUrl: './volume-conversor-page.component.scss'
})
export class VolumeConversorPageComponent extends PageBase implements OnInit {
  from: number = 0;
  to: number = 0;
  sourceValue: number = 1;
  sourceLabel: string = "Bits (b)";

  destinationValue: string = "0";
  destinationLabel: string = "Bits (b)";

  measures: Array<{ label: string, value: number, enum?: any }> = [
    { label: "Mililitro (ml)", value: 0, enum: LiterSystem.Mililiter },
    { label: "Centilitro (cl)", value: 1, enum: LiterSystem.Centiliter },
    { label: "Decilitro (dl)", value: 2, enum: LiterSystem.Deciliter },
    { label: "Litro (l)", value: 3, enum: LiterSystem.Liter },
    { label: "Hectolitro (hl)", value: 4, enum: LiterSystem.Hectoliter },
    { label: "Milímetro Cúbico (cm³)", value: 5, enum: MetricSystem.milimiter },
    { label: "Centímetro Cúbico (cm³)", value: 6, enum: MetricSystem.centimeter },
    { label: "Decímetro Cúbico (cm³)", value: 7, enum: MetricSystem.decimeter },
    { label: "Metro Cúbico (cm³)", value: 8, enum: MetricSystem.meters },
    { label: "Quilometro Cúbico (cm³)", value: 9, enum: MetricSystem.kilometers },
  ];

  constructor(
    private _mililiterConversorService: MililiterConversorService,
    private _centiliterConversorService: CentiliterConversorService,
    private _deciliterConversor: DeciliterConversorService,
    private _literConversor: LiterConversorService,
    private _hectoliterConversor: HectoliterConversorService,
    private _cubicMilimeterConversor: CubicMilimeterConveresorService,
    private _cubicCentimeterConversor: CubicCentimeterConversorService,
    private _cubicDecimeterConversor: CubicDecimeterConversorService,
    private _cubicMeterConversor: CubicMeterConversorService
  ) {
    super();
  }

  private _mililiterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._mililiterConversorService.convertToLiterSystem(value, data.enum);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._mililiterConversorService.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _centiliterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._centiliterConversorService.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._centiliterConversorService.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _deciliterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._deciliterConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._deciliterConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _literTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._literConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._literConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _hectoliterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._hectoliterConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._hectoliterConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _cubicMilimiterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._cubicMilimeterConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._cubicMilimeterConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _cubicCentimeterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._cubicCentimeterConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._cubicCentimeterConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _cubicDecimeterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._cubicDecimeterConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._cubicDecimeterConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  private _cubicMeterTo(value: number, to: number): number {
    let result = 0;
    let data = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._cubicMeterConversor.convertToLiterSystem(value, to);
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        result = this._cubicMeterConversor.convertToMetricSystem(value, data.enum);
        break;
    }

    return result;
  }

  onChangeSource(): void {
    let data = this.measures[Number(this.from)];
    this.sourceLabel = data.label;
  }

  onChangeDestination(): void {
    let data = this.measures[Number(this.to)];
    this.destinationLabel = data.label;
  }

  onClickConvert(): void {
    let result = 0;

    switch (Number(this.from)) {
      case 0:
        result = this._mililiterTo(this.sourceValue, Number(this.to));
        break;
      case 1:
        result = this._centiliterTo(this.sourceValue, Number(this.to));
        break;
      case 2:
        result = this._deciliterTo(this.sourceValue, Number(this.to));
        break;
      case 3:
        result = this._literTo(this.sourceValue, Number(this.to));
        break;
      case 4:
        result = this._hectoliterTo(this.sourceValue, Number(this.to));
        break;
      case 5:
        result = this._cubicMilimiterTo(this.sourceValue, Number(this.to));
        break;
      case 6:
        result = this._cubicCentimeterTo(this.sourceValue, Number(this.to));
        break;
      case 7:
        result = this._cubicDecimeterTo(this.sourceValue, Number(this.to));
        break;
      case 8:
        result = this._cubicMeterTo(this.sourceValue, Number(this.to));
        break
    }

    this.destinationValue = result.toPrecision(100);
  }

  ngOnInit(): void {
    this.addDescription('Converter entre de medidas de volume.');
  }
}

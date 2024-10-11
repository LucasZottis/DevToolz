import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { MililiterConversorService } from '../../../services/conversors/volume/mililiterConversor/mililiter-conversor.service';
import { CentiliterConversorService } from '../../../services/conversors/volume/centiliterConversor/centiliter-conversor.service';
import { DeciliterConversorService } from '../../../services/conversors/volume/deciliterConversor/deciliter-conversor.service';
import { LiterConversorService } from '../../../services/conversors/volume/literConversor/liter-conversor.service';
import { HectoliterConversorService } from '../../../services/conversors/volume/hectoliterConversor/hectoliter-conversor.service';
import { CubicCentimeterConversorService } from '../../../services/conversors/volume/cubicCentimeterConversor/cubic-centimeter-conversor.service';

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

  measures: Array<{ label: string, value: number }> = [
    { label: "Mililitro (ml)", value: 0 },
    { label: "Centilitro (cl)", value: 1 },
    { label: "Decilitro (dl)", value: 2 },
    { label: "Litro (l)", value: 3 },
    { label: "Hectolitro (hl)", value: 4 },
    { label: "Centímetro Cúbico (cm³)", value: 5 },
  ];

  constructor(
    private _mililiterConversorService: MililiterConversorService,
    private _centiliterConversorService: CentiliterConversorService,
    private _deciliterConversor: DeciliterConversorService,
    private _literConversor: LiterConversorService,
    private _hectoliterConversor: HectoliterConversorService,
    private _cubicCentimeterConversor: CubicCentimeterConversorService,
  ) {
    super();
  }

  private _mililiterTo(value: number, to: number): number {
    let result = 0;

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._mililiterConversorService.convertToLiterSystem(value, to);
        break;
    }

    return result;
  }

  private _centiliterTo(value: number, to: number): number {
    let result = 0;

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._centiliterConversorService.convertToLiterSystem(value, to);
        break;
    }

    return result;
  }

  private _deciliterTo(value: number, to: number): number {
    let result = 0;

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._deciliterConversor.convertToLiterSystem(value, to);
        break;
    }

    return result;
  }

  private _literTo(value: number, to: number): number {
    let result = 0;

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._literConversor.convertToLiterSystem(value, to);
        break;
    }

    return result;
  }

  private _hectoliterTo(value: number, to: number): number {
    let result = 0;

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._hectoliterConversor.convertToLiterSystem(value, to);
        break;
    }

    return result;
  }

  private _cubicCentimeterTo(value: number, to: number): number {
    let result = 0;

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._cubicCentimeterConversor.convertToLiterSystem(value, to);
        break;
    }

    return result;
  }

  onChangeSource(): void {
    let data = this.measures[Number(this.from) - 1];
    this.sourceLabel = data.label;
  }

  onChangeDestination(): void {
    let data = this.measures[Number(this.to) - 1];
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
        result = this._cubicCentimeterTo(this.sourceValue, Number(this.to));
        break;
    }

    this.destinationValue = result.toPrecision(100);
  }

  ngOnInit(): void {
    this.addDescription('Converter entre de medidas de volume.');
  }
}

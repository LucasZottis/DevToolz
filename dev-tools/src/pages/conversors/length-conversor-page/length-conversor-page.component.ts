import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MetricSystem } from '../../../enums/metricSystem';
import { PageBase } from '../../pageBase';
import { DecimalPipe } from '@angular/common';
import { PicometerConversorService } from '../../../services/conversors/length/metricSystemConversor/picometerConversor/picometer-conversor.service';

@Component({
  selector: 'length-conversor-page',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
  ],
  templateUrl: './length-conversor-page.component.html',
  styleUrl: './length-conversor-page.component.scss'
})

export class LengthConversorPageComponent extends PageBase implements OnInit {
  from: number = 0;
  to: number = 0;
  sourceValue: number = 1;
  sourceLabel: string = "Bits (b)";

  destinationValue: string = "0";
  destinationLabel: string = "Bits (b)";

  measures: Array<{ label: string, enum?: any }> = [
    { label: "Picômetro (pm)", enum: MetricSystem.picometer },
    { label: "Nanômetro (nm)", enum: MetricSystem.nanometer },
    { label: "Micrômetro (µm)", enum: MetricSystem.micrometer },
    { label: "Milimetro (mm)", enum: MetricSystem.milimiter },
    { label: "Centímetro (cm)", enum: MetricSystem.centimeter },
    { label: "Decímetro (dm)", enum: MetricSystem.decimeter },
    { label: "Metro (m)", enum: MetricSystem.meter },
    { label: "Quilômetro (km)", enum: MetricSystem.kilometer },
  ];

  constructor(
    private _picometerConversor: PicometerConversorService,
  ) {
    super();
  }

  private _picometerTo(value: number, to: number) {
    let result: number = 0;
    let data: any = this.measures[to];

    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        result = this._picometerConversor.toMetricSystem(value, data.enum);
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
        result = this._picometerTo(this.sourceValue, Number(this.to));
        break;
      // case 6:
      //   result = this._cubicCentimeterTo(this.sourceValue, Number(this.to));
      //   break;
      // case 7:
      //   result = this._cubicDecimeterTo(this.sourceValue, Number(this.to));
      //   break;
      // case 8:
      //   result = this._cubicMeterTo(this.sourceValue, Number(this.to));
      //   break;
      // case 9:
      //   result = this._cubicKilometerTo(this.sourceValue, Number(this.to));
      //   break;
      // case 10:
      //   result = this._ounceFluidTo(this.sourceValue, Number(this.to));
      //   break;
      // case 11:
      //   result = this._imperialOunceFluidTo(this.sourceValue, Number(this.to));
    }

    this.destinationValue = result.toPrecision(100);
  }

  ngOnInit(): void {
    this.addDescription('Converter entre de medidas de comprimento.');
  }
}
import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

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
    { label: "Hectalitro (hl)", value: 4 },
  ];

  private _convertLiterSystem(value: number, from: number, to: number): number {
    let result = 0;
    let defaultValue = 10;
    let measuse = this.measures[to];
    switch (to) {
      case 0:
      case 1:
      case 2:
      case 3: {
        if (from === to)
          result = Number(value);
        else if (from < to) {
          result = (value / Math.pow(defaultValue, measuse.value));
        } else if (from > to) {
          result = (value * Math.pow(defaultValue, measuse.value));
        }

        break;
      }

      case 4: {
        if (from === to)
          result = Number(value);
        else if (from < to) {
          result = (value / Math.pow(defaultValue, measuse.value - 1)) / 100;
        } else if (from > to) {
          result = (value * Math.pow(defaultValue, measuse.value - 1)) * 100;
        }

        break;
      }
    }

    return result;
  }

  private convert(value: number, from: number, to: number): string {
    let result = 0;

    switch (from) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result = this._convertLiterSystem(value, from, to);
        break;
    }

    return result.toPrecision(100);
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
    this.destinationValue = this.convert(this.sourceValue, Number(this.from), Number(this.to));
  }

  ngOnInit(): void {
    this.addDescription('Converter entre de medidas de volume.');
  }
}

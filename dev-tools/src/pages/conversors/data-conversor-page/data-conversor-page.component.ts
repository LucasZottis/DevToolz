import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, NgFor } from '@angular/common';

@Component({
  selector: 'data-conversor-page',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
    NgFor
  ],
  templateUrl: './data-conversor-page.component.html',
  styleUrl: './data-conversor-page.component.scss'
})
export class DataConversorPageComponent extends PageBase implements OnInit {
  from: number = 1;
  to: number = 1;
  sourceValue: number = 1;
  sourceLabel: string = "Bits (b)";

  destinationValue: string = "0";
  destinationLabel: string = "Bits (b)";

  datas: Array<{ label: string, measure: number, convertToByte?: boolean }> = [
    { label: "Bits (b)", measure: 0 },
    { label: "Bytes (B)", measure: 0 },
    { label: "Kilobits (Kbit)", measure: 1 },
    { label: "Kilobytes (KB)", measure: 1, convertToByte: true },
    { label: "Megabits (Mbit)", measure: 2 },
    { label: "Megabytes (MB)", measure: 2, convertToByte: true },
    { label: "Gigabits (Gbit)", measure: 3 },
    { label: "Gigabytes (GB)", measure: 3, convertToByte: true },
    { label: "Terabits (Tbit)", measure: 4 },
    { label: "Terabytes (TB)", measure: 4, convertToByte: true },
    { label: "Petabits (Pbit)", measure: 5 },
    { label: "Petabytes (PB)", measure: 5, convertToByte: true },
    { label: "Exabits (Ebit)", measure: 6 },
    { label: "Exabytes (EB)", measure: 6, convertToByte: true },
    { label: "Zettabits (Zbit)", measure: 7 },
    { label: "Zettabytes (ZB)", measure: 7, convertToByte: true },
    { label: "Yottabits (Ybit)", measure: 8 },
    { label: "Yottabytes (YB)", measure: 8, convertToByte: true },
  ]

  //#region Bits

  // private _bitsToBytes(value: number): number {
  //   return value / 8;
  // }

  // private _bitsToKilobits(value: number): number {
  //   return value / 1000;
  // }

  // private _bitsToKilobytes(value: number): number {
  //   return this._bitsToBytes(value) / 1000;
  // }

  // private _bitsToMegabits(value: number): number {
  //   return this._bitsToKilobits(value) / 1000;
  // }

  // private _bitsToMegabytes(value: number): number {
  //   return this._bitsToKilobytes(value) / 1000;
  // }

  // private _bitsToGigabits(value: number): number {
  //   return this._bitsToMegabits(value) / 1000;
  // }

  // private _bitsToGigabytes(value: number): number {
  //   return this._bitsToMegabits(value) / 1000;
  // }

  // private _bitsTo(value: number, to: number): number {
  //   switch (to) {
  //     case 1:
  //       return Number(value);
  //     case 2:
  //       return this._bitsToBytes(value);
  //     case 3:
  //       return this._bitsToKilobits(value);
  //     case 4:
  //       return this._bitsToKilobytes(value);
  //     case 5:
  //       return this._bitsToMegabits(value);
  //     case 6:
  //       return this._bitsToMegabytes(value);
  //     case 7:
  //       return this._bitsToGigabits(value);
  //     case 8:
  //       return this._bitsToGigabytes(value);
  //     case 9:
  //       return this._bitsToGigabits(value);
  //     case 10:
  //       return this._bitsToGigabits(value);
  //     case 11:
  //       return this._bitsToGigabits(value);
  //     case 12:
  //       return this._bitsToGigabits(value);
  //     case 13:
  //       return this._bitsToGigabits(value);
  //     case 14:
  //       return this._bitsToGigabits(value);
  //     case 15:
  //       return this._bitsToGigabits(value);
  //     case 16:
  //       return this._bitsToGigabits(value);
  //     case 17:
  //       return this._bitsToGigabits(value);
  //     case 18:
  //       return this._bitsToGigabits(value);
  //   }

  //   return 0;
  // }

  //#endregion Bits

  private convert(value: number, from: number, to: number): string {
    // switch (from) {
    //   case 1:
    //     return this._bitsTo(value, to).toFixed(20);
    //   // case 2:
    //   //   return this._octalTo(value, to);
    //   // case 3:
    //   //   return this._decimalTo(value, to);
    //   // case 4:
    //   //   return this._hexTo(value, to);
    //   // case 6:
    //   //   return this._romanTo(value, to);
    // }
    let result = 0;
    let data = this.datas[to - 1];

    if (from === to)
      result = Number(value);
    else if (from < to) {
      if (to === 2) {
        result = (value / 8);
      } else {
        if (data.convertToByte) {
          result = ((value / 8) / Math.pow(1000, data.measure));
        } else {
          result = (value / Math.pow(1000, data.measure));
        }
      }
    } else if (from > to) {
      if (from === 2) {
        result = (value * 8);
      } else {
        if (data.convertToByte) {
          result = ((value * 8) * Math.pow(1000, data.measure));
        } else {
          result = (value * Math.pow(1000, data.measure));
        }
      }
    }

    return result.toPrecision(100);
  }

  onChangeSource(): void {
    let data = this.datas[Number(this.from) - 1];
    this.sourceLabel = data.label;
  }

  onChangeDestination(): void {
    let data = this.datas[Number(this.to) - 1];
    this.destinationLabel = data.label;
  }

  onClickConvert(): void {
    this.destinationValue = this.convert(this.sourceValue, Number(this.from), Number(this.to));
  }

  ngOnInit(): void {
    this.addDescription("")
  }
}
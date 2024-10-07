import { Component, OnInit } from '@angular/core';
import { PageBase } from '../../pageBase';

@Component({
  selector: 'volume-conversor-page',
  standalone: true,
  imports: [],
  templateUrl: './volume-conversor-page.component.html',
  styleUrl: './volume-conversor-page.component.scss'
})
export class VolumeConversorPageComponent extends PageBase implements OnInit {
  from: number = 1;
  to: number = 1;
  sourceValue: number = 1;
  sourceLabel: string = "Bits (b)";

  destinationValue: string = "0";
  destinationLabel: string = "Bits (b)";

  ngOnInit(): void {
    throw new Error('Converter entre de medidas de volume.');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'letter-counter',
  standalone: true,
  imports: [],
  templateUrl: './letter-counter.component.html',
  styleUrl: './letter-counter.component.scss'
})

export class LetterCounterComponent {
  caracteres: number = 0;
  caracteresWithoutWhiteSpace: number = 0;
  whiteSpace: number = 0;
  vowels: number = 0;
  numbers: number = 0;
  words: number = 0;
  phrases: number = 0;

  onInput(event: any) {
    this.caracteres = event.target.value.length;
    this.caracteresWithoutWhiteSpace = event.target.value.replace(/\s/g, '').length;
    this.whiteSpace = event.target.value.split(' ').length - 1;
    this.vowels = event.target.value.match(/[aeiou]/gi)?.length || 0;
    this.numbers = event.target.value.match(/\d/g)?.length || 0;
    this.words = event.target.value.trim().split(/\s+/).length || 0;
    this.phrases = event.target.value.split(/[!.?:;]/).length || 0;
  }
}
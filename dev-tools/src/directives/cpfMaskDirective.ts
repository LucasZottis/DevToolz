import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cpf-mask]',
  standalone: true,
})

export class CpfMaskDirective {
  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    let input = this.element.nativeElement as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 3 && value.length <= 6) {
      value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    } else if (value.length > 6 && value.length <= 9) {
      value = value.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (value.length > 9 && value.length <= 11) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3-$4');
    }

    input.value = value;
  }
}
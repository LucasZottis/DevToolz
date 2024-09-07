import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cnpj-mask]',
  standalone: true,
})

export class CnpjMaskDirective {
  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    let input = this.element.nativeElement as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 2 && value.length <= 5) {
      value = value.replace(/(\d{2})(\d{0,3})/, '$1.$2');
    } else if (value.length > 5 && value.length <= 8) {
      value = value.replace(/(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else if (value.length > 8 && value.length <= 12) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, '$1.$2.$3/$4');
    } else if (value.length > 12 && value.length <= 14) {
      value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
    }

    input.value = value;
  }
}
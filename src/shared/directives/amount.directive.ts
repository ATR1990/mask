import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zpAmount]',
})
export class AmountDirective {
  @Input('zpAmount') maxLength!: number;

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(event.key)) return true;
    if (this.el.nativeElement.value.length < this.maxLength && /\d/.test(event.key)) return true;

    return false;
  }
}

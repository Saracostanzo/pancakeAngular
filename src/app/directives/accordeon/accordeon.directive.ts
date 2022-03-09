import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAccordeon]',
})
export class AccordeonDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';

  @HostListener('click') click(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    this.backgroundColor = 'orangered';
  }
}

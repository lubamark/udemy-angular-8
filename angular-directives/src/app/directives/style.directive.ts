import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string;
  @Input() fontWeight: string;

  @HostBinding('style.color') elColor = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // elRef.nativeElement.style.color = 'teal';
    // this.renderer.setStyle(elRef.nativeElement, 'color', 'purple');
  }
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color || 'teal';
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color || 'red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', this.fontWeight || '500');
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', null);
  }


}

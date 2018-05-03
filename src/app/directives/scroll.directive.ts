import { Directive, ElementRef, OnInit, Input, EventEmitter } from '@angular/core';
declare var $;

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  @Input() emitter: EventEmitter<null>;
  element = $(this.elementRef.nativeElement);

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
   this.setScroll();

    this.emitter.subscribe(() => {
      this.element.mCustomScrollbar("destroy");
      this.setScroll();
    })
  }

  setScroll(): void {
    this.element.mCustomScrollbar({
      scrollInertia: 0,
      autoExpandScrollbar: true,
      theme:"scr-theme"
    });
  }
}

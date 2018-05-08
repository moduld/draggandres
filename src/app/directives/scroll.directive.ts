import { Directive, ElementRef, OnInit, Input, EventEmitter } from '@angular/core';
declare let $;

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  @Input() reloadScroll: EventEmitter<null>;
  element = $(this.elementRef.nativeElement);

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
   this.setScroll();

    this.reloadScroll.subscribe(() => {
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

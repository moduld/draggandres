import { Directive, ElementRef, OnInit } from '@angular/core';
declare var $;

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    $(this.elementRef.nativeElement).mCustomScrollbar({
      scrollInertia: 0,
      autoExpandScrollbar: true,
      theme:"scr-theme"
    });
  }
}

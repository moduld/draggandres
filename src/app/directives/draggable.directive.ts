import { Directive, ElementRef, OnInit } from '@angular/core';
import * as Interract from 'interactjs';

@Directive({
  selector: '[ng2-draggable]'
})
export class Draggable implements OnInit{

  startX = 0;
  startY = 0;

  constructor(public element: ElementRef) {
  }

  ngOnInit(){
    let self = this;

    Interract(this.element.nativeElement)
    .draggable({
      snap: {
        targets: [
          Interract['createSnapGrid']({ x: 1, y: 1 })
        ],
        range: Infinity,
        relativePoints: [ { x: 0, y: 0 } ]
      },
      inertia: false,
      restrict: {
        restriction: this.element.nativeElement.parentNode,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        endOnly: true
      }
    })
    .resizable({
      edges: { left: false, right: true, bottom: true, top: false },
      inertia: false,
    })
    .on('resizemove', function (event) {
      let target = event.target;
      target.style.width  = event['rect'].width + 'px';
      target.style.height = event['rect'].height + 'px';
    })
    .on('dragmove', function (event) {
      self.startX += event.dx;
      self.startY += event.dy;
      event.target.style.webkitTransform =
        event.target.style.transform =
          'translate(' + self.startX + 'px, ' + self.startY + 'px)';
    });
  }
}

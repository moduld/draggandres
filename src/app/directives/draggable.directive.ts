import { Directive, ElementRef, OnInit, Input, EventEmitter } from '@angular/core';
import * as Interract from 'interactjs';

@Directive({
  selector: '[ng2-draggable]'
})
export class Draggable implements OnInit{

  startX = 0;
  startY = 0;
  @Input() heighVal: any;
  @Input() headerHeight: any;
  @Input() emitter: EventEmitter<null>;
  timeout: any;

  constructor(public element: ElementRef) {
  }

  ngOnInit() {
    let self = this;

    Interract(this.element.nativeElement)
    .draggable({
      snap: {
        targets: [
          Interract['createSnapGrid']({ x: 1, y: 1 })
        ],
        range: Infinity,
        relativePoints: [ { x: this.startX, y: this.startY } ]
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
      inertia: false
    })
    .on('resizemove', function (event) {

      let target = event.target;
      if (event.dy > 0) {
        if (target.clientHeight < self.heighVal.clientHeight + self.headerHeight.clientHeight + 6) {
          target.style.width  = event['rect'].width + 'px';
          target.style.height = event['rect'].height + 'px';
        }
      } else {
        target.style.width  = event['rect'].width + 'px';
        target.style.height = event['rect'].height + 'px';
      }
      self.timeout && clearTimeout(self.timeout);
      self.timeout = setTimeout(() => {
        self.emitter.emit();
        clearTimeout(self.timeout)
      }, 500)
    })
    .on('dragmove', function (event) {
      console.log(event);
      self.startX += event.dx;
      self.startY += event.dy;
      // if (self.startY !== 0 && self.startY !== 0) {
        self.element.nativeElement.style.top = self.startY + 'px';
        self.element.nativeElement.style.left = self.startX + 'px';
      // }
      // event.target.style.top = self.startY + 'px';
      // event.target.style.left = self.startX + 'px';
      // event.target.style.webkitTransform =
      //   event.target.style.transform =
      //     'translate(' + self.startX + 'px, ' + self.startY + 'px)';
    })
  }
}

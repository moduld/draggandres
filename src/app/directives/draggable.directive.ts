import { Directive, ElementRef, OnInit, Input } from '@angular/core';
declare let $;

@Directive({
  selector: '[ng2-draggable]'
})
export class Draggable implements OnInit{

  @Input() elem: any;
  maxHeight: any;
  reference: any;

  constructor(public element: ElementRef) {
  }

  ngOnInit() {
      this.elem.emitter.subscribe((data) => {
        if (data.flag === 'fromComponent') {
          this.reference && $(this.element.nativeElement).draggable("destroy").resizable("destroy");
          this.maxHeight = data.header + data.tabel;
          this.runDirective();
        }
      })
  }

  runDirective(): void {
    let self = this;
    this.reference = $(this.element.nativeElement).draggable().resizable({
      maxHeight: self.maxHeight + 12,
      stop: ( event, ui ) => {
        self.elem.emitter.next({flag: 'fromDirective',width: ui.size.width, height: ui.size.height})
      }
    });
  }
}

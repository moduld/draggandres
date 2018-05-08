import { Component, OnInit, ViewChild, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() elem: any;
  @ViewChild('headerHeight') headerHeight: any;
  @ViewChild('tableHeight') tableHeight: any;
  reloadScroll: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeTable: EventEmitter<any> = new EventEmitter<any>();

  data = [
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    },
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    },
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    },
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    },
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    },
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    },
    {
      name: 'Greece',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.elem.emitter.next({flag: 'fromComponent',header: this.headerHeight.nativeElement.clientHeight, tabel: this.tableHeight.nativeElement.clientHeight})
    }, 0);
    this.elem.emitter.subscribe((data) => {
      if (data.flag === 'fromDirective') {
        this.reloadScroll.emit(data)
      }
    })
  }

  calculate(key: string): number {
    return this.data.reduce((acc, current) => {
      return acc + current[key]
    }, 0);
  }

  addNewOneString(): void {
    this.data.push({
      name: 'New one',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    });
    setTimeout(() => {
      this.elem.emitter.next({flag: 'fromComponent',header: this.headerHeight.nativeElement.clientHeight, tabel: this.tableHeight.nativeElement.clientHeight})
    }, 0);
  }

  close(): void {
    this.closeTable.emit(this.elem.ind)
  }
}

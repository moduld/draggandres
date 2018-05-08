import { Component } from '@angular/core';
import { Subject } from "rxjs/Subject";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curIndex: number = 1;

  items: any[] = [{
    ind: this.curIndex,
    emitter: new Subject<any>()
  }];

  addNew(): void {
    this.curIndex++;
    this.items.push({
      ind: this.curIndex,
      emitter: new Subject<any>()
    })
  }

  closeTable(index): void {
    console.log(index);
    this.items = this.items.filter((item) => {
      return item.ind !== index;
    })
  }
}

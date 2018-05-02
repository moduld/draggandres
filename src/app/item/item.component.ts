import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

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
  }

  calculate(key: string): number {
    return this.data.reduce((acc, current) => {
      return acc + current[key]
    }, 0);
  }

  addNewOne(): void {
    this.data.push({
      name: 'New one',
      c1: 123123,
      c2: 8769809,
      c3: 7908-889,
      c4: 67543,
      c5: 9087667,
      c6: 5435,
      c7: 648890
    })
  }

}

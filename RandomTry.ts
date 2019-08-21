app.component.ts

import { Component } from '@angular/core';

class dict {
  num: number;
  count: number;
  constructor(i: number) {
    this.num = i;
    this.count = 1;
  }
}

@Component({
  selector: 'app-root',
  template: `
  <!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:left">
  <h1 style="vertical-align: middle">
    <img width="50" alt="Angular Logo" style="vertical-align: middle"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    Welcome to {{ title }}!
  </h1>
</div>
<hr>
{{arr1 | json}}
<br>
<input type="text" placeholder="Input here" name="input1" [(ngModel)]="input1">
<button (click)="submit1()">Submit1</button>
<br>
<div>
  {{output1}}
</div>
<hr>
<br>
<button (click)="submit2()">Submit2</button>
<br>
<div *ngIf="output2 != null">
  <div *ngFor="let x of output2">
    {{x.num}} - {{x.count}} <br>
  </div>
</div>

<hr><br>

<button (click)="submit3()">Submit3</button>
<br>
<div *ngIf="output3 != null">
  <div *ngFor="let x of output3">
    {{x}}<br>
  </div>
</div>
  `
})
export class AppComponent {
  title = 'Assignemnt2';
  arr1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 9, 8, 1];
  arr2: Array<any> = [1, false, 2, 3, "SomeText", 4, true, 5, 6, 7, false, 1, "beta", 2, 3, 4, true, 9, 8, 1, "Alfa"];
  input1 = this.arr1[0];
  output1: number = null;
  output2: Array<dict> = null;
  output3: Array<any> = null;
  submit1() {
    this.output1 = this.occurance1(this.arr1, this.input1);
  }
  submit2() {
    this.output2 = this.occurance2(this.arr1);
  }
  submit3() {
    this.output3 = this.occurance3(this.arr2);
  }
  occurance1(arr: Array<number>, param: number): number {
    let result = 0;
    console.log(arr.length);
    for (const i of arr) {
      if (i == param) {
        result++;
      }
    }
    return result;
  }

  occurance2(arr: Array<number>): Array<dict> {
    const result: Array<dict> = new Array<dict>();
    for (let i of arr) {
      let flag = false;
      for (const element of result) {
        if (element.num === i) {
          element.count++;
          flag = true;
          break;
        }
      }
      if (flag === false) {
        result.push(new dict(i));
      }
    }
    return result;
  }

  occurance3(arr: Array<any>): Array<any> {
    let result: Array<any>;
    const numberArray: Array<Number> = new Array<Number>();
    const stringArray: Array<String> = new Array<String>();
    const boolArray: Array<Boolean> = new Array<Boolean>();
    for (const i of arr) {
      if (typeof i == "number") {
        numberArray.push(i);
      } else if (typeof i == "string") {
        stringArray.push(i);
      } else if (typeof i == "boolean") {
        boolArray.push(i);
      }
    }
    result = [...numberArray, ...stringArray, ...boolArray];
    return result;
  }
}

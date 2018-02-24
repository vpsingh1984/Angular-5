import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <input #myInput type="text">
    <button type="button" (click)="logMessage(myInput.value)">Log</button>
    <app-test [parentData]="name"></app-test>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name = "Vijay";
  
  logMessage(val) {
    console.log(val);
  }
}

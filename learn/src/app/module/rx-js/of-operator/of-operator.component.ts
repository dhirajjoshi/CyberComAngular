import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent  {

  observable= of(1,2,3,4,5)
  constructor() { 
    const subs =this.observable.subscribe({
      next(value){
        console.log(value);
      },
      complete(){
        console.log("Complete");
      }
    })
  }
}

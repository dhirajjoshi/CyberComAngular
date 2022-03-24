import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent{

  observable=from(fetch("https://api.publicapis.org/random"))
  constructor() { 
    const subs = this.observable.subscribe({
      next(value){
        console.log(value) 
      },
      complete(){
        console.log("complete");
        
      }
    })
  }
}

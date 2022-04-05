import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent {

  constructor() {
    let inter = interval(1000);
    let takeValue=inter.pipe(take(10));
    const sub=takeValue.subscribe(val=>console.log(val));
   }

}

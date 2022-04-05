import { Component } from '@angular/core';
import { distinctUntilChanged, distinctUntilKeyChanged, from, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css']
})
export class DistinctUntilChangedComponent {

  constructor() { 
    const src = from([1,1,2,2,3,3,3,3,3,4,5,6,6]);
    const arr = from([
      { name: 'Dhiraj' },
      { name: 'Himanshu' },
      { name: 'Himanshu' },
      { name: 'Yashraj' }
    ]);
    // Distinct Until Key Changed
    arr.pipe(distinctUntilKeyChanged('name')).subscribe(console.log)
    // Distinct Until Changed
    src.pipe(distinctUntilChanged()).subscribe(console.log)
    // const source = interval(1000);

    // Throttle
    // //throttle for 2 seconds, emit latest value
    // const example = source.pipe(throttle(val => interval()));
    // //output: 0...3...6...9
    // const subscribe = example.subscribe(val => console.log(val));
  }

}

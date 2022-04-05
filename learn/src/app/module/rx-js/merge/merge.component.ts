import { Component, OnInit } from '@angular/core';
import { interval, mapTo, merge, timeout } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor() { 
    //emit every 2.5 seconds
    const first = interval(2500);
    //emit every 2 seconds
    const second = interval(2000);
    //emit every 1.5 seconds
    const third = interval(1500);
    //emit every 1 second
    const fourth = interval(1000);

    const example = merge(
      first,
      second,
      third,
      fourth
    );
    const sub = example.subscribe(val => {
      console.log(val)
    });
    setTimeout(() => sub.unsubscribe,5000)
  }

  ngOnInit(): void {
  }

}

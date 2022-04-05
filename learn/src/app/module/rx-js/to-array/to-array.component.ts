import { Component } from '@angular/core';
import { interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent {

  constructor() { 
    const inter=interval(1000)
    const interArr=inter.pipe(
      take(10),
      toArray()
    ).subscribe(console.log);
  }

}

import { Component } from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  sub1: Subscription;
  constructor() { 
    // const clicks = fromEvent(document, 'click');
    // const positions = clicks.pipe(map(ev => ev.isTrusted?'Clicked':false));
    // positions.subscribe(x => console.log(x));

    let data=interval(1000)
    this.sub1=data.pipe(
      map(value=>
      'value '+value))
      .subscribe(
        res=>{
          console.log(res);
        })
    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000)
  }
}

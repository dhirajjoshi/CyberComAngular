import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent {

  constructor() {
    // let custom=new Observable((Subscriber => {
    //   let count = 0;
    //   setInterval(() => {
    //     Subscriber.next(count);
    //     count++;
    //   }, 1000);
    // }))

    let custom=Observable.create((_observer: any)=>{
      let count=0;
      setInterval(()=>{
        if(count<10){
          _observer.next(count)
          count++
        }
        else{
          _observer.complete();
        }
      },1000)
    })
custom.
    custom.subscribe((data: any)=>{
      console.log(data);
    })
   }
}

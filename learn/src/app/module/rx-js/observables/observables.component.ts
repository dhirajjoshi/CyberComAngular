import { Component } from '@angular/core';
import { interval, Observable, timer} from 'rxjs';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  //observ is a Observer
  observ  = new Observable((subscriber)=>{
    // subscriber.next('Hello World')
    // subscriber.error('Error Message')
    // subscriber.complete()
    // subscriber.error('Error Message')
    
    // Asyn
    // Interval Operator
    // const inter=interval(1000)
    // const subs2=inter.subscribe(
    //   console.log 
    // )

    // Timer
    // const t=timer(0,1000)
    // const subs3=t.subscribe(
    //   console.log 
    // )

    let i=0;
    const number=setInterval(()=>{
      if(i<5){
        subscriber.next(i)
        i++;
      }
      else if(i==5){
        subscriber.complete();
      }
      else{
        subscriber.error('Error ')
      }
    },2000);
    return()=>{
      clearInterval(number)
    }
  })
  constructor() {
    const subscription = this.observ.subscribe({
      next: (value) => {
        console.log(value)
      },
      complete:()=>{
        console.log('Complete Message');
        subscription.unsubscribe();
      },
      error:(err)=>{
        console.error(err)
      }
    })
    
    //Unsubscribe after 4 sec
    // setTimeout(()=>{
    //   subscription.unsubscribe();
    // },4000)


  //   const foo = new Observable(subscriber => {
  //     console.log('Hello');
  //     subscriber.next(42);
  //     subscriber.next(100);
  //     subscriber.next(200);
  //     setTimeout(() => {
  //       subscriber.complete(); // happens asynchronously
  //     }, 1000);
  //   });
     
  //   console.log('before');
  //   foo.subscribe(x => {
  //     console.log(x);
  //   });
  //   console.log('after');
   }
}

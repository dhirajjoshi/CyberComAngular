import { Component } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent {
  sub1: Subscription;

  constructor() { 

    let name=['dhiraj','himanshu','yashraj','ketan']
    let data=interval(1000)
    this.sub1=data.pipe(
      tap(value=>{
        if(name[value]===undefined){
          this.sub1.unsubscribe();
        }}
      ),
      map(value=>
      name[value]))
      .subscribe(
        res=>{
          console.log(res);
        })
    setTimeout(()=>{
      this.sub1.unsubscribe();
    },10000)

  }


}

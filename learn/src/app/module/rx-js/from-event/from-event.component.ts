import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent{

  observable=fromEvent(
    document,'click'
  )
  constructor() { 
    const subs = this.observable.subscribe(
      console.log 
    )
  }

}

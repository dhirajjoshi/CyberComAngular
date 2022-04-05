import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit {

  constructor() {
    const clk=fromEvent(document,'click');
    const res=clk.pipe(debounceTime(1000)).subscribe(x=>console.log(x.isTrusted));
   }

  ngOnInit(): void {
  }

}

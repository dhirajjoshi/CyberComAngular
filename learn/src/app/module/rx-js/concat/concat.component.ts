import { Component } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent {

  constructor() {
    const con=concat(
      of(1,2,3),of(4,5,6),of(7,8,9)
    )
    con.subscribe(console.log);
  }

}

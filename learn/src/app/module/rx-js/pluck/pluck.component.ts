import { Component } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent {

  constructor() {
    const obj=from([
      {name:'Dhiraj',role:'Developer'},
      {name:'Himanshu',role:'Tester'}
    ])
    const obj2=from([
      {name:'Dhiraj',job:{role:'Developer',salary:'2000000'}},
      {name:'Himanshu'}
    ])
    const plk=obj.pipe(pluck('name')).subscribe(console.log)
    const plk2=obj2.pipe(pluck('job','role')).subscribe(console.log)
   }

}

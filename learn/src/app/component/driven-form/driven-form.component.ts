import { Component} from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent {

contactMethod=[
    {id:1, name:'Email'},
    {id:2, name:'Phone'},
]
gender=[
  {id:1, name:'Male'},
  {id:2, name:'Female'},
]

  log(x:any){
    console.log(x);
  }
  submit(x:any){
    console.log(x.value.contact);
    console.log(x.value.comment);   
    console.log(x);
  }
}

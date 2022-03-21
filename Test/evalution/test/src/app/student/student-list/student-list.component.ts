import { Component, ViewChild } from '@angular/core';
import { StudentInfoComponent } from './student-info/student-info.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  {

 @ViewChild(StudentInfoComponent) info:any;

 data: any[]=[];
  addStudent(){
    // console.log(pp);
    
    // let form = document.getElementById('stdForm');
    // let v =form.elements['title'].value;
    // console.log(form.elemets);
    // alert();
  }
}

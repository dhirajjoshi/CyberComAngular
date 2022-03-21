import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentInfoComponent } from './student-list/student-info/student-info.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent,
    StudentInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudentDetailsComponent,
    StudentInfoComponent,
    StudentListComponent
  ]
})
export class StudentModule { 

 students :any[]=[
  {
        'first_name':'Dhiraj',
        'last_name':'joshi',
        'gender':'male',
        'institute_name':'GNU',
        'city':'Ambaji',
      },
 ];

 addStudent(std:any){
  this.students.push(std);
 }
 editStudent(){}
 deleteStudent(){

 }
}

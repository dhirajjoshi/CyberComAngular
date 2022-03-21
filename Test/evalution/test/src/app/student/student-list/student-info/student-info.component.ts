import { Component, Input,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { students } from 'src/environments/environment';
import { StudentModule } from '../../student.module';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  // @Input() data:any[]=[
  //   {
  //     'first_name':'Dhiraj',
  //     'last_name':'joshi',
  //     'gender':'male',
  //     'institute_name':'GNU',
  //     'city':'Ambaji',
  //   },
  // ];
  data:any;
  ngOnInit(): void {
      this.data = students;
  }
  editStudent(){

  }
  removeStudent(index:any){
    students.splice(index,1);
  }
}

import { Component, OnInit } from '@angular/core';
import { CurdService } from 'src/app/services/curd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsers:any=[]

  credentials={
    email:'',
    password:''
  }
  login(){
    this.getUsers()
  }
  constructor(private curd:CurdService) { }

  ngOnInit(): void {
  }
  async getUsers() {
    this.allUsers = await this.curd.getAllUsers(); 

    for (let i = 0; i < this.allUsers.length; i++) {
      if(this.credentials.email===this.allUsers[i].email && this.credentials.password===this.allUsers[i].password){
        alert('login Success')
        break
        }
        alert('Email or Password is in correct')
      } 
    }
}

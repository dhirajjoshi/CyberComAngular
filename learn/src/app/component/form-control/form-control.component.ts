import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {
  // Variables
name =new FormControl("",
  [ Validators.required,]);

email=new FormControl("",
  [ Validators.required,
    Validators.email]);

password=new FormControl("",
  [ Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]);

confirmPassword=new FormControl("",
  [ Validators.required ]);

age=new FormControl("",
  [Validators.required,
  Validators.min(18),
  Validators.max(120)]);

  phone=new FormControl('',
  [ Validators.required,
  Validators.minLength(10),
  Validators.maxLength(10)]);

  showAlert=false
  alertMessage='Please wait! Your account is being created'
  alertColor='blue'

  // Variables Over
  registerForm=new FormGroup({
    name:this.name,
    email:this.email,
    password:this.password,
    confirmPassword:this.confirmPassword,
    age:this.age,
    phone:this.phone
  })

  get controls(){
    return this.registerForm.controls
  }

  register(){
    this.showAlert=true;
    this.alertMessage='Please wait! Your account is being created';
    this.alertColor='blue';
  }
}

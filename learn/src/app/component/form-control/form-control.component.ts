import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  registerForm=new FormGroup({
    name:new FormControl("",
    [ Validators.required,
      Validators.minLength(2)]),
    email:new FormControl("",
    [ Validators.required,
      Validators.minLength(3)]),
    password:new FormControl("",
    [ Validators.required,
      Validators.minLength(8)])
  })

  get controls(){
    return this.registerForm.controls
  }
}

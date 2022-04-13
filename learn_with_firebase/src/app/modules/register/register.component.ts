import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private auth:AngularFireAuth,
    private db:AngularFirestore){}

  inProcess=false
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
 
  async register(){
    this.inProcess=true
    const {email,password}=this.registerForm.value;
    try{
      const userCred = await this.auth.createUserWithEmailAndPassword(email,password)
      console.log(userCred);
      await this.db.collection('users').add({
        name:this.name.value,
        email:this.email.value,
        age:this.age.value,
        phone:this.phone.value,
        password:this.password.value
      })
      this.inProcess=false
      alert("Success")
    }
    catch(e){
      console.error(e);
      alert("Error")
      return
    }
  }
}

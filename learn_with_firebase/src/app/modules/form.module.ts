import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input/input.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,                               
    ReactiveFormsModule,
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    InputComponent
  ]
})
export class FormModule { }

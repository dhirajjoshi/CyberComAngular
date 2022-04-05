import { Component } from '@angular/core';
import { FormControl, Validators, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { CustomVelidators } from './custom.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  fg: any;
  constractor(fb:FormBuilder){
this.fg=fb.group({
  account:fb.group({
    username:["",[ Validators.required,
      CustomVelidators.cannotContainSpace],
    CustomVelidators.shouldBeUnique],
    password:["",[ Validators.required,
      Validators.minLength(8)]]
  }),
  topics:new FormArray([])
})
  }
// fg=new FormGroup({
//   account:new FormGroup({
//     username:new FormControl(
//       '',
//       [ Validators.required,
//         CustomVelidators.cannotContainSpace],
//       CustomVelidators.shouldBeUnique
//     ),
//     password:new FormControl(
//       '',
//       [ Validators.required,
//         Validators.minLength(8)]
//     )
//   }),
//   topics:new FormArray([])
// }); 

login(){
  this.fg.setErrors({
    invalidLogin:true
  });
} 

addTopic(topic:HTMLInputElement){
(this.fg.get('topics') as FormArray).push(new FormControl(topic.value));
topic.value=''
}

getControl(){
  return (this.fg.get('topics')as FormArray).controls;
}

removeTopic(topic: AbstractControl){
  let index=this.topics.controls.indexOf(topic)
  this.topics.removeAt(index);
}

get topics() {
  return this.fg.get('topics') as FormArray;
}
get username(){
  return this.fg.get('account.username');
}
get password(){
  return this.fg.get('account.password');
}
}

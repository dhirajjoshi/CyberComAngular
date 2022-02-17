import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './components/success/success.component';
import { DangerComponent } from './components/danger/danger.component';
import { WarningComponent } from './components/warning/warning.component';



@NgModule({
  declarations: [
    SuccessComponent,
    DangerComponent,
    WarningComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessComponent,
    DangerComponent,
    WarningComponent
  ]
})
export class TestModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { DrivenFormComponent } from './component/driven-form/driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { FormControlComponent } from './component/form-control/form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgForComponent,
    DrivenFormComponent,
    ReactiveFormComponent,
    FormControlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

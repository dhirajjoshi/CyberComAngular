import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent,
    StudentMainComponent
  ],
  imports: [
    BrowserModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

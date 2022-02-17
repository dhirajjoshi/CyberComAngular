import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestModule } from './module/test/test.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    TestModule
  ],
  declarations:[
    AppComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }

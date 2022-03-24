import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgForComponent } from './component/ng-for/ng-for.component';
import { DrivenFormComponent } from './component/driven-form/driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { FormControlComponent } from './component/form-control/form-control.component';
import { InputComponent } from './shared/input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './shared/alert/alert.component';
import { LoginComponent } from './component/login/login.component';

import { RxJSModule } from './module/rx-js/rx-js.module';
import { ObservablesComponent } from './module/rx-js/observables/observables.component';
import { FromComponent } from './module/rx-js/from/from.component';
import { OfOperatorComponent } from './module/rx-js/of-operator/of-operator.component';
import { FromEventComponent } from './module/rx-js/from-event/from-event.component';
import { CustomObservableComponent } from './module/rx-js/custom-observable/custom-observable.component';
import { MapComponent } from './module/rx-js/map/map.component';
import { TapComponent } from './module/rx-js/tap/tap.component';
import { MergeallComponent } from './module/rx-js/mergeall/mergeall.component';
import { mergeMap } from 'rxjs';
import { MergemapComponent } from './module/rx-js/mergemap/mergemap.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgForComponent,
    DrivenFormComponent,
    ReactiveFormComponent,
    FormControlComponent,
    InputComponent,
    AlertComponent,
    LoginComponent,
    ObservablesComponent,
    FromEventComponent,
    FromComponent,
    OfOperatorComponent,
    CustomObservableComponent,
    MapComponent,
    TapComponent,
    MergeallComponent,
    MergemapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RxJSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

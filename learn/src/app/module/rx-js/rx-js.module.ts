import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeComponent } from './take/take.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapComponent } from './map/map.component';
import { MergeallComponent } from './mergeall/mergeall.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { TapComponent } from './tap/tap.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { PluckComponent } from './pluck/pluck.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';

@NgModule({
  declarations: [
    ObservablesComponent,
    FromEventComponent,
    FromComponent,
    OfOperatorComponent,
    CustomObservableComponent,
    MapComponent,
    TapComponent,
    MergeallComponent,
    MergemapComponent,
    TakeComponent,
    ConcatComponent,
    MergeComponent,
    ToArrayComponent,
    PluckComponent,
    DebouncetimeComponent,
    DistinctUntilChangedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ObservablesComponent,
    FromEventComponent,
    FromComponent,
    OfOperatorComponent,
    CustomObservableComponent,
    MapComponent,
    TapComponent,
    MergeallComponent,
    MergemapComponent,
    TakeComponent,
    ConcatComponent,
    MergeComponent,
    ToArrayComponent,
    PluckComponent,
    DebouncetimeComponent,
    DistinctUntilChangedComponent
  ]
})
export class RxJSModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { NavComponent } from './component/nav/nav.component';
import { ContactComponent } from './component/contact/contact.component';
import { ResourceModule } from './resource/resource.module';
import { ClipComponent } from './clip/clip.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ContactComponent,
    ClipComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ResourceModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

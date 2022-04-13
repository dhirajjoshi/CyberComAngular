import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { BlogComponent } from './blog/blog.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    BlogComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }

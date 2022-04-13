import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path:'blog',
    component:BlogComponent,
    data:{
      authOnlt:true
    }
  },
  {
    path:'upload',
    component:UploadComponent,
    data:{
      authOnlt:true
    }
  },
  {
    path:'upload-clip',
    redirectTo:'upload'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFromAndImageUploadComponent } from './details-from-and-image-upload/details-from-and-image-upload.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path:'details-vid-upload',
    component:DetailsFromAndImageUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

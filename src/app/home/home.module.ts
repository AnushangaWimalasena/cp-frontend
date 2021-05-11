import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DetailsFromAndImageUploadComponent } from './details-from-and-image-upload/details-from-and-image-upload.component';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { ResultsShowComponent } from './results-show/results-show.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsFromAndImageUploadComponent,
    ResultsShowComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class HomeModule { }

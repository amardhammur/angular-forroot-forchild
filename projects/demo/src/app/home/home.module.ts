import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PollingModule } from 'polling';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,PollingModule
  ]
})
export class HomeModule { }

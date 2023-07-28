import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { PollingModule } from 'polling';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PollingModule.withConfig(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

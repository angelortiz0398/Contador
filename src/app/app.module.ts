import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonDissComponent } from './counter/button-diss/button-diss.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonAddComponent,
    ButtonDissComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

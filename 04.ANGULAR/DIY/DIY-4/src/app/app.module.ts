import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './Components/display/display.component';
import { MinusComponent } from './Components/minus/minus.component';
import { PlusComponent } from './Components/plus/plus.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MinusComponent,
    PlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

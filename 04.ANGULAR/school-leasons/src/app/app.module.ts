import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassEditionComponent } from './Pages/Class/class-edition/class-edition.component';
import { ClassIndexComponent } from './Pages/Class/class-index/class-index.component';
import { LeassonIndexComponent } from './Pages/Leassons/leasson-index/leasson-index.component';
import { LeassonEditionComponent } from './Pages/Leassons/leasson-edition/leasson-edition.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClassEditionComponent,
    ClassIndexComponent,
    LeassonIndexComponent,
    LeassonEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

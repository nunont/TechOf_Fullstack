import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupForControlComponent } from './components/group-for-control/group-for-control.component';
import { GroupForControlBuilderComponent } from './components/group-for-control-builder/group-for-control-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupForControlComponent,
    GroupForControlBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

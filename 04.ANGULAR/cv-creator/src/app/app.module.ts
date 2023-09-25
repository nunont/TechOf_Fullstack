import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditionComponent } from './profile/profile-edition/profile-edition.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProfilesComponent } from './profile/list-profiles/list-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditionComponent,
    ListProfilesComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditionComponent } from './profile/profile-edition/profile-edition.component';
import { ListProfilesComponent } from './profile/list-profiles/list-profiles.component';

const routes: Routes = [
  {path: 'createCV', component: ProfileEditionComponent},
  {path:'list', component: ListProfilesComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

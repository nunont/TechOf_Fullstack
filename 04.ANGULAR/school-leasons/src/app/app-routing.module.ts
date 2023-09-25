import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassIndexComponent } from './Pages/Class/class-index/class-index.component';
import { ClassEditionComponent } from './Pages/Class/class-edition/class-edition.component';
import { LeassonIndexComponent } from './Pages/Leassons/leasson-index/leasson-index.component';
import { LeassonEditionComponent } from './Pages/Leassons/leasson-edition/leasson-edition.component';

const routes: Routes = [
  { path : 'class', component: ClassIndexComponent},
  { path : '', redirectTo: 'class', pathMatch: 'full'},
  { path : 'class/edit/:id', component: ClassEditionComponent},
  { path : 'class/create', component: ClassEditionComponent},
  {path : 'leassons', component: LeassonIndexComponent},
  {path : 'leassons/edit/:id', component: LeassonEditionComponent},
  {path : 'leassons/create', component: LeassonEditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

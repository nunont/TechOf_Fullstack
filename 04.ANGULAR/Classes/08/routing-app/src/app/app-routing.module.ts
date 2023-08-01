import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChildAComponent } from './components/home/child-a/child-a.component';
import { ChildBComponent } from './components/home/child-b/child-b.component';
import { alwaysAuthGuard } from './guards/always-auth.guard';
import { neverAuthGuard } from './guards/never-auth.guard';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [neverAuthGuard] },
  { 
    path: 'home', component: HomeComponent,
    children: [
      { path: 'child-a', component: ChildAComponent},
      { path: 'child-b', component: ChildBComponent}
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

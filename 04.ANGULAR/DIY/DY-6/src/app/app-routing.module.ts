import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';
import { secretGuardGuard } from './guards/secret-guard.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'secret', component: SecretComponent, canActivate: [secretGuardGuard]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

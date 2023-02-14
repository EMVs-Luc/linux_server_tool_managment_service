import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  loadChildren:() =>
      import ('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'software',  loadChildren:() =>
      import ('./software/software.module').then((m) => m.SoftwareModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

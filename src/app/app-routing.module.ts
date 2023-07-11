import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import{ MascotasComponent} from './mascotas/mascotas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'administrador',
    //canActivate: [AuthGuard],
    component: AdministradorComponent
  },
  {
    path: 'mascotas',
    //canActivate: [AuthGuard],
    component: MascotasComponent
  },
  {
    path: 'login',
    //canActivate: [AuthGuard],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

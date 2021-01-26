import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppInicioComponent } from './componentes/app-inicio/app-inicio.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
<<<<<<< HEAD
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
=======
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';


const routes: Routes = [
  
<<<<<<< HEAD
  {path: '', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:MainComponent},
  {path: 'dashboard', component:DashboardComponent}
=======
  {path: '**', component:AppComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:MainComponent}
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

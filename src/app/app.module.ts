import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModules} from './material.modules'
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AppInicioComponent } from './componentes/app-inicio/app-inicio.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent} from './componentes/auth/login/login.component';
import { RegisterComponent} from './componentes/auth/register/register.component';

import { AuthService} from './servicios/authService/auth.service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CrearNoticiaComponent } from './componentes/crear-noticia/crear-noticia.component';
import { ModalAbrirNoticiaComponent } from './componentes/modal-abrir-noticia/modal-abrir-noticia.component';
import { EditarNoticiaComponent } from './componentes/editar-noticia/editar-noticia.component';
import { ModalConfirmacionComponent } from './componentes/modal-confirmacion/modal-confirmacion.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppInicioComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CrearNoticiaComponent,
    ModalAbrirNoticiaComponent,
    EditarNoticiaComponent,
    ModalConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ModalAbrirNoticiaComponent, CrearNoticiaComponent, EditarNoticiaComponent, ModalConfirmacionComponent]
})
export class AppModule { }

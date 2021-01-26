import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModules} from './material.modules'
import { HttpClientModule} from '@angular/common/http';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

=======

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AppInicioComponent } from './componentes/app-inicio/app-inicio.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent} from './componentes/auth/login/login.component';
<<<<<<< HEAD
import { RegisterComponent} from './componentes/auth/register/register.component';

import { AuthService} from './servicios/authService/auth.service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CrearNoticiaComponent } from './componentes/crear-noticia/crear-noticia.component';
import { ModalAbrirNoticiaComponent } from './componentes/modal-abrir-noticia/modal-abrir-noticia.component';
import { EditarNoticiaComponent } from './componentes/editar-noticia/editar-noticia.component';
import { ModalConfirmacionComponent } from './componentes/modal-confirmacion/modal-confirmacion.component'
=======
import { RegisterComponent} from './componentes/auth/register/register.component'
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppInicioComponent,
    MainComponent,
    LoginComponent,
<<<<<<< HEAD
    RegisterComponent,
    DashboardComponent,
    CrearNoticiaComponent,
    ModalAbrirNoticiaComponent,
    EditarNoticiaComponent,
    ModalConfirmacionComponent
=======
    RegisterComponent
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ModalAbrirNoticiaComponent, CrearNoticiaComponent, EditarNoticiaComponent, ModalConfirmacionComponent]
=======
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AppServiceService} from '../../servicios/app-service.service';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import {CrearNoticiaComponent } from '../crear-noticia/crear-noticia.component';
import { EditarNoticiaComponent} from '../editar-noticia/editar-noticia.component'
import { ModalConfirmacionComponent} from '../modal-confirmacion/modal-confirmacion.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  metadata:any = localStorage.getItem('metadata');
  progress_bar:boolean = false;
  nombre_titulo:string;
  displayedColumns: string[] = ['foto_noticia', 'titulo', 'subtitulo', 'desc_tag', 'editar', 'eliminar'];
  dataSource = new BehaviorSubject([]);
  constructor(private appService: AppServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.progress_bar = true;
    const params = new HttpParams().set('metadata', this.metadata)
    this.appService.getUsuario(params).subscribe((res:any)=>{
      this.nombre_titulo = 'Bienvenido' + ' ' + res.nombres + ' ' + res.apellido_pate;
    })
    this.appService.getAllNoticias(params).subscribe((res:any)=>{
      this.progress_bar = false;
      this.dataSource.next(res.todos)
    })
  }
  agregarNoticiaModal(){
    const dialogRef = this.dialog.open(CrearNoticiaComponent,{
      width: '1100px',
      height: '700px'
    });

    dialogRef.componentInstance.newNoti.subscribe((data)=>{
      console.log(data);
    })
  }

  editarNoticiaModal(elem){
    let obj = {
      id_noticia: elem.id_noticia,
      titulo: elem.titulo,
      subtitulo: elem.subtitulo,
      cuerpo: elem.cuerpo_noticia,
      id_tag : elem.id_tag,
      desc_tag : elem.desc_tag,
      foto_noticia : elem.foto_noticia
    }
    const dialogRef = this.dialog.open(EditarNoticiaComponent,{
      width: '1100px',
      height: '700px',
      data: obj
    });

    dialogRef.componentInstance.edit.subscribe((data)=>{
      elem.titulo = data.titulo;
      elem.subtitulo = data.subtitulo;
      elem.desc_tag = data.desc_tag;
    })
  }

  eliminarNoticiaModal(elem, index){
    
    let obj = {
      msj: '¿Seguro que desea borrar el mensaje?',
      id_noticia : elem.id_noticia
    }
    const dialogRef = this.dialog.open(ModalConfirmacionComponent,{
      width: '400px',
      height: '200px',
      data: obj
    });
    dialogRef.disableClose = true;

    let aux = this.dataSource.value;
    console.log('antes', this.dataSource)
    dialogRef.componentInstance.delete.subscribe(()=>{
      aux.splice(index,1);
      this.dataSource.next(aux);
      console.log('despues', this.dataSource)
      
    })
  }
} 

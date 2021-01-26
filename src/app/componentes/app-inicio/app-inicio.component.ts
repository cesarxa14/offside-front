<<<<<<< HEAD
import { Component, OnInit, Input} from '@angular/core';
import { AppServiceService} from '../../servicios/appService/app-service.service';
import { ModalAbrirNoticiaComponent} from '../modal-abrir-noticia/modal-abrir-noticia.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


=======
import { Component, OnInit } from '@angular/core';
import { AppServiceService} from '../../servicios/appService/app-service.service'
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.component.html',
  styleUrls: ['./app-inicio.component.css']
})
export class AppInicioComponent implements OnInit {

<<<<<<< HEAD
  @Input() todos: any;
  metadata: any = localStorage.getItem('metadata');
  color_like:any = [];
  color_guardar: any = [];
  flg_like:boolean;
  likeado:boolean;
  guardado:boolean;
  noticiasLista:any = [];
  constructor(private AppService: AppServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    
    setTimeout(()=>{
      this.noticiasLista = this.todos;
      for(let i=0; i<this.todos.length;i++){
        if(this.todos[i].like == false){
          this.color_like[i] = 'white'
        }else{
          this.color_like[i] = 'black'
        }
      }
      console.log('llenado')
    }, 4000)
    
  }

  abrirNoticia(news){
    const dialogRef = this.dialog.open(ModalAbrirNoticiaComponent,{
      width: '1100px',
      height: '700px',
      data: news
    });
  }

  like(elem, index){    
    this.likeado = !elem.like;
    let obj = {
      id_noticia : elem.id_noticia,
      likeado    : this.likeado,
      metadata   : this.metadata
    }
   
    this.AppService.likeNoticia(obj).subscribe(()=>{
      if(elem.like == false){ //ha dado like
        this.color_like[index] = 'black'
        elem.cantidad_likes++;
      }else{ // ha quitado el like
        elem.cantidad_likes--;
        this.color_like[index] = 'white'
      }
      elem.like = !elem.like
    })
  }

  guardar(elem, index){
    this.guardado = !elem.favorito;
    let obj = {
      id_noticia : elem.id_noticia,
      guardado    : this.guardado,
      metadata   : this.metadata
    }
    this.AppService.guardarNoticia(obj).subscribe((res)=>{
      console.log(res)
      if(elem.favorito == false){ //ha dado guardar
        this.color_guardar[index] = 'black'
      }else{ // ha quitado el guardar
        this.color_guardar[index] = 'white'
      }
      elem.favorito = !elem.favorito
=======
  noticiasLista:any = [];
  constructor(private AppService: AppServiceService) { }

  ngOnInit() {
    this.AppService.getAllNoticias().subscribe(res=>{
      console.log('trajo nada', res)
      this.noticiasLista = res;
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
    })
  }

}

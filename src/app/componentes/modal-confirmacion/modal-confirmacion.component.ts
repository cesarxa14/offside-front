import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppServiceService} from '../../servicios/app-service.service';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

  @Output() delete:any = new EventEmitter();
  msj:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private appService: AppServiceService, public dialogRef: MatDialogRef<ModalConfirmacionComponent>) { }

  ngOnInit() {
    this.msj = this.data.msj;
  }

  borrarNoticia(){
    let id_noticia = this.data.id_noticia;
    let obj = {
      id_noticia: id_noticia
    }
    this.appService.borrarNoticia(obj).subscribe(res=>{
      console.log(res);
      this.delete.emit();
      this.dialogRef.close();
    })
  }

}

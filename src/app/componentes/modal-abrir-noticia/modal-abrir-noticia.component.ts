import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-abrir-noticia',
  templateUrl: './modal-abrir-noticia.component.html',
  styleUrls: ['./modal-abrir-noticia.component.css']
})
export class ModalAbrirNoticiaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('data', this.data)
  }

}

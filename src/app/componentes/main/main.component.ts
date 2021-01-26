import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AppServiceService} from '../../servicios/appService/app-service.service';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
=======
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

<<<<<<< HEAD
  metadata: any = localStorage.getItem('metadata')
  todasNoticias: any = {
    todos: [],
    fut_peruano: [],
    champions: [],
    premier: [],
    laliga: [],
    seriaA: []
  };
  constructor(private AppService: AppServiceService) { }

  ngOnInit() {
    const params = new HttpParams().set('metadata', this.metadata)
    console.log('metadata', this.metadata)
    this.AppService.getAllNoticias(params).subscribe((res:any)=>{
      console.log('trajo nada', res)
      this.todasNoticias.todos = res.todos;
      this.todasNoticias.fut_peruano = res.fut_peruano;
      this.todasNoticias.champions = res.champions;
      this.todasNoticias.premier = res.premier;
      this.todasNoticias.laliga = res.laliga;
      this.todasNoticias.seriaA = res.seriaA;
      
      // this.noticiasLista = res.todos;
    })
=======
  constructor() { }

  ngOnInit() {
>>>>>>> dca4b9529326ee659130c1050a5c3fc2edf1cb60
  }

}

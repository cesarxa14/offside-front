import { Component, OnInit } from '@angular/core';
import { AppServiceService} from '../../servicios/app-service.service';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
  }

}

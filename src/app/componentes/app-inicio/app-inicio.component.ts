import { Component, OnInit } from '@angular/core';
import { AppServiceService} from '../../servicios/appService/app-service.service'

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.component.html',
  styleUrls: ['./app-inicio.component.css']
})
export class AppInicioComponent implements OnInit {

  noticiasLista:any = [];
  constructor(private AppService: AppServiceService) { }

  ngOnInit() {
    this.AppService.getAllNoticias().subscribe(res=>{
      console.log('trajo nada', res)
      this.noticiasLista = res;
    })
  }

}

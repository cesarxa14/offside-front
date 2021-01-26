import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  url_general = '/api/general';
  metadata = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  getUsuario(params){
    return this.http.get(`${this.url_general}/getUsuario`, {params:params});
  }


  getAllNoticias(item){
    return this.http.get(`${this.url_general}/getAllNoticias`, { params: item });
  }

  getNoticia(item){
    return this.http.get(`${this.url_general}/getNoticia`, { params: item });
  }

  likeNoticia(obj){
    return this.http.post(`${this.url_general}/likeNoticia`, obj);
  }

  guardarNoticia(obj){
    return this.http.post(`${this.url_general}/guardarNoticia`, obj);
  }

  

  getTags(){
    return this.http.get(`${this.url_general}/getTags`)
  }

  login(obj){
    return this.http.post(`${this.url_general}/login`, obj);
  }

  crearNoticia(obj){
    return this.http.post(`${this.url_general}/crearNoticia`, obj);
  }

  editarNoticia(obj){
    return this.http.post(`${this.url_general}/editarNoticia`, obj);
  }

  borrarNoticia(obj){
    console.log(obj);
    return this.http.post(`${this.url_general}/borrarNoticia`, obj);
  }


}

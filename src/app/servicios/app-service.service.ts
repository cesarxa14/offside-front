import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  api_uri = '/api/general/';
  metadata: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  getUsuario(params){
    return this.http.get(`${this.api_uri}/getUsuario`, {params: params} );
  }
  getAllNoticias(params){
    return this.http.get(`${this.api_uri}/getAllNoticias`, {params: params});
  }
  getNoticia(){
    return this.http.get(`${this.api_uri}/getNoticia`);
  }
  getTags(){
    return this.http.get(`${this.api_uri}/getTags`);
  }
  protected(){
    return this.http.get(`${this.api_uri}/protected`);
  }
  login(obj){
    return this.http.post(`${this.api_uri}/login`, obj);
  }
  crearNoticia(obj){
    return this.http.post(`${this.api_uri}/crearNoticia`, obj);
  }
  editarNoticia(obj){
    return this.http.post(`${this.api_uri}/editarNoticia`, obj);
  }
  borrarNoticia(obj){
    return this.http.post(`${this.api_uri}/borrarNoticia`, obj);
  }
  likeNoticia(obj){
    return this.http.post(`${this.api_uri}/likeNoticia`, obj);
  }
  guardarNoticia(obj){
    return this.http.post(`${this.api_uri}/guardarNoticia`, obj);
  }
}

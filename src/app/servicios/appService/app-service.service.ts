import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  url_general = '/api/general'
  constructor(private http: HttpClient) { }


  getAllNoticias(){
    console.log('mando la data')
    return this.http.get(`${this.url_general}`);
  }
}

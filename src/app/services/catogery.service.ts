import { Injectable } from '@angular/core';
import { Catogery } from '../dtattype';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatogeryService {

  constructor(private http: HttpClient) { }


  addCatogery(catogery: Catogery){
    
    return this.http.post("http://localhost:3000/catogery", catogery)
  }
  getCat(){
    return this.http.get<Catogery[]>("http://localhost:3000/catogery")
  }
}

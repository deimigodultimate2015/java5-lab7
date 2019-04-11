import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonfileService {

  constructor(private http: HttpClient) { }

  getFileData(): Observable<any> {
    return this.http.get('./assets/Prods.js');
  }
}

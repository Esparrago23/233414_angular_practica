import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../iuser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url_base: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private _http: HttpClient) { }
  getAll(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.url_base)
  }
}

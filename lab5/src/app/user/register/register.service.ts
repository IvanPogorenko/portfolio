import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser, toUser} from '../../interfaces/user';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http: HttpClient
  ) {
  }

  public postNewUser(user: IUser): Observable<object>{
    return this._http.post<object>('register', {user})
  }

  public findUserByPhone(phone: string): Observable<IUser | null>{
    return this._http.post<IUser | null>('find-user-by-phone', {phone})
  }
}

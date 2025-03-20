import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogin} from '../../interfaces/login';
import {map, Observable} from 'rxjs';
import {IUser, toUser} from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  public loginUser(user: ILogin): Observable<IUser>{
    return this._http.post('login-user', {user}).pipe(
      map((data: any) => toUser(data.correctUser))
    )
  }

  public checkLoginData(phone: string | undefined, password: string | undefined): Observable<IUser | null>{
    return this._http.post<IUser | null>('check-user-data', {phone, password})
  }

}

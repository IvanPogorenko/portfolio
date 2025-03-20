import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {IPizza, toPizza} from '../interfaces/pizza';
import {IUser, toUser} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  private userIdSubject = new BehaviorSubject<string>(localStorage.getItem('userId') ?? '')
  public userId$ = this.userIdSubject.asObservable()

  public setUserId(userId: string) {
    localStorage.setItem('userId', userId)
    this.userIdSubject.next(userId)
  }

  public getUser(userId: number): Observable<IUser> {
    return this._http.post(`user-by-id`, {userId}).pipe(
      map((data: any) => toUser(data))
    )
  }
}

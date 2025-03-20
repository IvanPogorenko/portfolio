import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IMsg} from '../interfaces/msg';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private showMessageSubject = new BehaviorSubject<IMsg | null>(null);
  showMessage$ = this.showMessageSubject.asObservable();

  public show(msg: IMsg) {
    this.showMessageSubject.next(msg);
  }

  public hide() {
    this.showMessageSubject.next(null);
  }
}

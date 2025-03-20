import {Component, OnInit} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HistoryCardComponent} from './history-card/history-card.component';
import {IUser} from '../interfaces/user';
import {UserService} from './user.service';
import {HistoryService} from './history-card/history.service';
import {IOrder} from '../interfaces/order';
import {ItemCardComponent} from '../catalog/item-card/item-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [LoginComponent, RegisterComponent, HistoryCardComponent, ItemCardComponent, NgForOf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true
})
export class UserComponent implements OnInit{

  public constructor(
    private _userService: UserService,
    private _historyService: HistoryService
  ) {
  }

  public history!: IOrder[]
  public user!: IUser
  public userId!: string
  public isLogin: boolean = false

  public ngOnInit(){
    this._userService.userId$.subscribe((userId) =>  {
      this.userId = userId
      if (this.userId){
        this._userService.getUser(Number(this.userId)).subscribe((user) => {
          this.user = user
        })
        this._historyService.getUserHistory().subscribe((response) => {
          this.history = response
        })
      }
    })

  }

  public toggleMode(){
    this.isLogin = !this.isLogin
  }

  public logOut(){
    localStorage.removeItem('userId')
    this.userId = ''
    this.user = {} as IUser
    this.isLogin = true
  }
}

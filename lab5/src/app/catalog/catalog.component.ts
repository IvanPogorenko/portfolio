import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {appRoutes, RouterService} from '../router.service';
import {ItemCardComponent} from './item-card/item-card.component';
import {NgFor, NgIf} from '@angular/common';
import {CatalogService} from './catalog.service';
import {IPizza} from '../interfaces/pizza';
import {ItemInfoComponent} from './item-info/item-info.component';
import {MessageService} from '../message/message.service';
import {MessageComponent} from '../message/message.component';
import {IMsg} from '../interfaces/msg';

@Component({
    selector: 'app-catalog',
  imports: [RouterOutlet, RouterLink, ItemCardComponent, ItemInfoComponent, NgFor, MessageComponent, NgIf],
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.scss',
    standalone: true
})
export class CatalogComponent implements OnInit{
  public constructor(
    private _routerService: RouterService,
    private _catalogService: CatalogService,
    private _messageService: MessageService
  ) {
  }

  public pizzas: IPizza[] = []
  public showMessage: boolean = false;
  public message: IMsg | null = null;

  public ngOnInit(){
    this._catalogService.getItems().subscribe((pizzas) => {
      this.pizzas = pizzas
    })
    this._messageService.showMessage$.subscribe((message) => {
      if (message) {
        this.message = message;
        this.showMessage = true;

        setTimeout(() => {
          this.showMessage = false;
          this.message = null;
          this._messageService.hide()
        }, 2000);
      }
    });
  }

  protected readonly appRoutes = appRoutes;
}

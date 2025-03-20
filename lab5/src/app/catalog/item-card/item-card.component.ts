import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {IPizza} from '../../interfaces/pizza';
import {appRoutes, RouterService} from '../../router.service';

@Component({
  selector: 'app-item-card',
  imports: [
    RouterLink
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  standalone: true
})
export class ItemCardComponent implements OnInit{
  @Input() data!: IPizza;

  public constructor(
    private _routerService: RouterService,
  ) {
  }

  public firstPrice!: number

  public ngOnInit() {
    this.firstPrice = Array.isArray(this.data.price) ? this.data.price[0] : this.data.price;
  }

  public navigateToItemInfo(){
    this._routerService.toItem(this.data.name);
  }
}

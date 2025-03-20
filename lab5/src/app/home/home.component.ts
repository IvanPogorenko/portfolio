import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {appRoutes} from '../router.service';
import {NgOptimizedImage} from '@angular/common';
import {MessageComponent} from '../message/message.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgOptimizedImage,
    MessageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

  protected readonly appRoutes = appRoutes;
}

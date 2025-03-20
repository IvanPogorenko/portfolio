import {Component, Input} from '@angular/core';
import {MessageService} from './message.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {IMsg} from '../interfaces/msg';

@Component({
  selector: 'app-message',
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  standalone: true
})
export class MessageComponent {
  @Input() message!: IMsg
}

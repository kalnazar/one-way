import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  standalone: true,
  imports: [],
  templateUrl: './popup-menu.component.html',
  styleUrl: './popup-menu.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }), // initial state
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })), // final state
      ]),

      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scale(0.8)' })
        ),
      ]),
    ]),
  ],
  host: { '[@fadeSlide]': '' },
})
export class PopupMenuComponent {
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}

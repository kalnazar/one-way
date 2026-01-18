import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { PopupService } from '../../shared/services/popup.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private popupService: PopupService) {}

  togglePopup() {
    this.popupService.open();
  }
}

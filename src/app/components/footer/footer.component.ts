import { Component } from '@angular/core';
import { PopupService } from '../../shared/services/popup.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  phoneNumber = '+7(771) 224 31-18';
  email = 'info@oneway.kz';
  instagramLink = 'https://www.instagram.com/onewaykz/';

  constructor(private popupService: PopupService) {}

  togglePopup() {
    this.popupService.open();
  }
}

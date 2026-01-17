import { Component } from '@angular/core';
import { EntryComponent } from '../entry/entry.component';
import { PopupService } from '../../../shared/services/popup.service';

@Component({
  selector: 'app-special-offer',
  standalone: true,
  imports: [EntryComponent],
  templateUrl: './special-offer.component.html',
  styleUrl: './special-offer.component.scss',
})
export class SpecialOfferComponent {
  title = 'Предлагаем вам специальное предложение перед началом работы';
  laptopImageUrl = 'assets/images/laptop-on-table.png';

  constructor(private popupService: PopupService) {}

  togglePopup() {
    this.popupService.open();
  }
}

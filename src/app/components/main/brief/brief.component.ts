import { Component } from '@angular/core';
import { EntryComponent } from '../entry/entry.component';
import { PopupService } from '../../../shared/services/popup.service';

@Component({
  selector: 'app-brief',
  standalone: true,
  imports: [EntryComponent],
  templateUrl: './brief.component.html',
  styleUrl: './brief.component.scss',
})
export class BriefComponent {
  title =
    'Мы создали для вас качественный бриф, чтобы вникнуть в процесс изготовки';
  imageUrl = 'assets/images/brief.png';

  constructor(private popupService: PopupService) {}

  togglePopup() {
    this.popupService.open();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupMenuComponent } from './components/popup-menu/popup-menu.component';
import { PopupService } from './shared/services/popup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PopupMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'one-way';

  constructor(public popupService: PopupService) {}

  ngOnInit() {
    setTimeout(() => {
      if (!this.popupService.isOpen()) {
        this.popupService.open();
      }
    }, 10000);
  }
}

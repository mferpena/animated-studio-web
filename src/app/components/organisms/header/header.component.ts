import { Component } from '@angular/core';
import { RouterNavigationService } from 'src/app/core/services/router/router-navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private routerNavService: RouterNavigationService) { }

  goToHome() {
    this.routerNavService.navigateTo('home');
  }

  goToWorks() {
    this.routerNavService.navigateTo('works');
  }

  goToContactUs() {
    this.routerNavService.navigateTo('contact-us');
  }
}

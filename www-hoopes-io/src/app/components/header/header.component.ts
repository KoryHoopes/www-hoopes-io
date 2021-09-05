// Angular
import { Component } from '@angular/core';
// Component Configuration
import { animations, icons, site, socialMedia } from './header.configuration';
// Material 
import { MatDialog } from '@angular/material/dialog';

// Header Component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: animations,
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  // Template variables
  site = site;
  socialMedia = socialMedia;

  // Mobile Menu
  mobileMenu(): void {
    site.mobileMenu.show = !site.mobileMenu.show;

    if (site.mobileMenu.icon === icons.bars) {
      site.mobileMenu.icon = icons.times;

      return;
    }

    site.mobileMenu.icon = icons.bars;
  }

  // Email Dialog
  openEmail() {
    console.log('Open email dialog.');
  }
}
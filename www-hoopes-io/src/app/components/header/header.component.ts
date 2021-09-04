// Angular
import { Component } from '@angular/core';
// Animations 
import { animations } from './header.animations';
// Data
import { icons, site, socialMedia } from './header.data';
// Interfaces
import { Site, SocialMedia } from './header.interfaces';
// Material 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: animations,
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  site: Site = site;
  socialMedia: SocialMedia[] = socialMedia;

  // Component functions
  mobileMenu(): void {
    site.mobileMenu.show = !site.mobileMenu.show;

    if (site.mobileMenu.icon === icons.bars) {
      site.mobileMenu.icon = icons.times;

      return;
    }

    site.mobileMenu.icon = icons.bars;
  }

  // Email modal
  openEmail() {
    console.log('Open email dialog.');
  }
}

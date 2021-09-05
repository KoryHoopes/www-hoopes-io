// Angular
import { trigger, transition, style, animate } from '@angular/animations';
// Font Awesome
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
// Interfaces
import { HeaderInterfaces } from './header.interfaces';

// Header Component Configuration
const animations = [
    trigger('toggleMobileMenu', [
        transition(':enter', [
            style({
                top: '-22px'
            }),
            animate(
                '.5s ease-in-out',
                style({
                    top: '80px'
                })
            )
        ]),
        transition(':leave', [
            style({}),
            animate(
                '.5s ease-in-out',
                style({
                    top: '-22px'
                })
            )
        ])
    ])
];
const icons = {
    bars: faBars,
    email: faEnvelope,
    gitHub: faGithub,
    linkedIn: faLinkedinIn,
    replit: faCode,
    times: faTimes
};
const site: HeaderInterfaces.Site = {
    title: 'hoopes.io',
    email: faEnvelope,
    baseUrl: '/',
    mobileMenu: {
        icon: faBars,
        show: false
    }
};
const socialMedia: HeaderInterfaces.SocialMedia[] = [
    {
        name: 'Github',
        icon: faGithub,
        url: 'https://www.github.com/koryhoopes'
    },
    {
        name: 'LinkedIn',
        icon: faLinkedinIn,
        url: 'https://www.linkedin.com/in/kory-hoopes'
    },
    {
        name: 'Replit.com',
        icon: faCode,
        url: 'https://replit.com/@KoryHoopes'
    }
];

export { animations, icons, site, socialMedia };
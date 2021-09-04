// Angular
import { trigger, transition, style, animate } from '@angular/animations';

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

export { animations };
import { trigger, state, style, animate, transition } from '@angular/animations';

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate('1000ms ease-in')
        ]),
        transition(':leave', [
            animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}

export function mainEntrance() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateY(50%)', opacity: 0 }),
            animate('1500ms ease-in')
        ]),
        transition(':leave', [
            animate('1500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}

export function expand() {
    return trigger('expand', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateY(-10%)', opacity:0 }),
            animate('1000ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}
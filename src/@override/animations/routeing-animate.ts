import { animate, state, style, transition, trigger } from '@angular/animations';

export const routingAnimates = trigger('routing', [
    
    transition('* <=> *', [
        style({ opacity: 0  }),
        animate('1s', style({ opacity: 1 }))
    ]),
    // transition(':leave',[
    //     style({opacity: 1}),
    //     animate('500ms',style({opacity: 0 , transform:'translateY(50px)'}))
    // ])
])
import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

export const contentAnimations = trigger('contentAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }), 
    group([
      query(':enter',[
          style({ transform: 'translateX(-50%)', opacity: 0 }),
          animate('500ms', 
            style({ transform: 'translateX(0%)', opacity: 100 })
          )
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateX(0%)'}),
          animate('500ms', 
            style({ transform: 'translateX(-50%)', opacity: 0 })
          )
      ], { optional: true }),
    ])
  ])
]);

export const contentAnimations2 = trigger('contentAnimations2', [
  transition('* => open', [
    style({ transform: 'translateX(-50%)', opacity: 0 }),
    animate('500ms 1200ms', 
      style({ transform: 'translateX(0%)', opacity: 100 })
    )
  ]),
]);

export const navAnimation = trigger('navAnimation', [
  state('open', style({
    height: '580px',
    opacity: 1,
  })),
  transition('* => open', [
    animate('500ms')
  ]),
]);

export const profileAnimation = trigger('profileAnimation', [
  state('open', style({
    height: '100%',
    opacity: 1,
  })),
  transition('* => open', [
    animate('500ms 300ms')
  ]),
]);

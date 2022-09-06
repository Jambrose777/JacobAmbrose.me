import { animate, animateChild, AUTO_STYLE, group, query, sequence, state, style, transition, trigger } from "@angular/animations";

export const contentAnimations = trigger('contentAnimations', [
  transition('void => *', [
    style({ transform: 'translateX(-50%)', opacity: 0 }),
    animate('500ms 1200ms', 
      style({ transform: 'translateX(0%)', opacity: 100 })
    )
  ]),
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }), 
    group([
      query(':enter',[
          style({ transform: 'translateX(-45%)', opacity: 0 }),
          animate('500ms', 
            style({ transform: 'translateX(0%)', opacity: 100 })
          )
      ], { optional: true }),
      query(':leave', [
          style({ transform: 'translateX(0%)'}),
          animate('500ms', 
            style({ transform: 'translateX(-45%)', opacity: 0 })
          )
      ], { optional: true }),
    ])
  ])
]);

export const contentAnimationsOpenMobile = trigger('contentAnimationsOpenMobile', [
  state('void', style({
    height: '0',
    'overflow-y': 'hidden',
  })),
  state('*', style({
    height: 'calc(100vh - 115px)',
    opacity: 1,
  })),
  transition('void => *', [
    animate('500ms 300ms')
  ]),
]);

export const navAnimation = trigger('navAnimation', [
  state('*', style({
    height: '0',
  })),
  state('open', style({
    height: '580px',
    opacity: 1,
  })),
  transition('* => open', [
    animate('500ms')
  ]),
]);

export const navAnimationMobile = trigger('navAnimationMobile', [
  state('*', style({
    height: '0',
  })),
  state('open', style({
    height: '100px',
    opacity: 1,
  })),
  transition('* => open', [
    animate('300ms')
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

export const subContentAnimations = trigger('subContentAnimations', [
  transition("* => *", [
    query(":enter, :leave", style({ position: "fixed", width: 'calc((100vw - 190px) * .5)', height: 'calc(100vh - 218px)', 'overflow-y': 'hidden' }), { optional: true }),
    query(":enter", style({ visibility: 'hidden' }), { optional: true }),
    sequence([
      query(":leave", [
        style({ opacity: 1 }),
        animate(
          "300ms",
          style({ opacity: 0 })
        )
      ], { optional: true }),
      query(":enter", [
        style({ opacity: 0, visibility: 'visible' }),
        animate(
          "300ms",
          style({ opacity: 1 })
        )
      ], { optional: true }),
    ])
  ])
]);

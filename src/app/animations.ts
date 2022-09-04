import { animate, animateChild, AUTO_STYLE, group, query, sequence, state, style, transition, trigger } from "@angular/animations";

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

export const subContentAnimations = trigger('subContentAnimations', [

// scroll in / out
  transition("* => *", [
    query(":enter, :leave", style({ position: "fixed", width: 'calc((100vw - 190px) * .5)', height: 'calc(100vh - 218px)', 'overflow-y': 'hidden' }), { optional: true }),
    query(":enter", style({ visibility: 'hidden' }), { optional: true }),
    sequence([
      query(":leave", [
        style({ height: '822px', visibility: 'visible' }),
        animate('500ms', 
          style({ height: '0', visibility: 'hidden' })
        )
      ], { optional: true }),,
      query(":enter", [
        style({ height: '0', visibility: 'hidden' }),
        animate('500ms', 
          style({ height: '822px', visibility: 'visible' })
        )
      ], { optional: true }),,
    ])
  ])


// Fade in / out
  // transition("* => *", [
  //   query(":enter, :leave", style({ position: "fixed", width: 'calc((100vw - 190px) * .5)', height: 'calc(100vh - 218px)', 'overflow-y': 'hidden' })),
  //   query(":enter", style({ visibility: 'hidden' })),
  //   sequence([
  //     query(":leave", [
  //       style({ opacity: 1 }),
  //       animate(
  //         "500ms",
  //         style({ opacity: 0 })
  //       )
  //     ]),
  //     query(":enter", [
  //       style({ opacity: 0, visibility: 'visible' }),
  //       animate(
  //         "500ms",
  //         style({ opacity: 1 })
  //       )
  //     ]),
  //   ])
  // ])
]);

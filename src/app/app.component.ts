import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { contentAnimations, contentAnimations2, navAnimation, profileAnimation } from './animations';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ contentAnimations, contentAnimations2, navAnimation, profileAnimation ]
})
export class AppComponent {
  title = 'JacobAmbrose.me';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit, OnDestroy {
  @Input() navItems: NavItem[] = [];
  @Input() baseRoute: string;
  @Input() collapsed: boolean = false;
  
  routerSubscription: Subscription;
  activeRouteTitle: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    let activeNavItem = this.navItems.find(item => item.route === this.router.url.substring(this.router.url.lastIndexOf('/') + 1))
    this.activeRouteTitle = activeNavItem?.title || this.navItems[0]?.title || '';

    this.routerSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // get end of url string and find NavItem using that string
      let activeNavItem = this.navItems.find(item => item.route === event.url.substring(event.url.lastIndexOf('/') + 1))
      this.activeRouteTitle = activeNavItem?.title || this.navItems[0]?.title || '';
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}

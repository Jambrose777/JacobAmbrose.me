import { Component, HostListener, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'wca',
  templateUrl: './wca.component.html',
  styleUrls: ['./wca.component.scss']
})
export class WcaComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'WCA', route: 'wca' },
    { title: 'Delegate', route: 'delegate' },
    { title: 'Results Team', route: 'results' },
    { title: 'Teams', route: 'teams' },
    { title: 'Competitor', route: 'competitor' },
  ];
  collapsedNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.navItems[2].title = window.innerWidth > 1240 || window.innerWidth <= 1075 ? 'Results Team' : 'WRT';
    this.collapsedNav = window.innerWidth <= 1075;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navItems[2].title = window.innerWidth > 1240 || window.innerWidth <= 1075 ? 'Results Team' : 'WRT';
    this.collapsedNav = window.innerWidth <= 1075;
  }

}

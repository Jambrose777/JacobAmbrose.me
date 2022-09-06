import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { subContentAnimations } from 'src/app/animations';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'wca',
  templateUrl: './wca.component.html',
  styleUrls: ['./wca.component.scss'],
  animations: [ subContentAnimations ]
})
export class WcaComponent implements OnInit, AfterViewInit {
  navItems: NavItem[] = [
    { title: 'WCA', route: 'wca' },
    { title: 'Delegate', route: 'delegate' },
    { title: 'Results Team', route: 'results' },
    { title: 'Teams', route: 'teams' },
    { title: 'Competitor', route: 'competitor' },
  ];
  collapsedNav: boolean = false;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.navItems[2].title = window.innerWidth > 1240 || window.innerWidth <= 1075 ? 'Results Team' : 'WRT';
    this.collapsedNav = window.innerWidth <= 1075;
  }

  ngAfterViewInit(): void {
     this.changeRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navItems[2].title = window.innerWidth > 1240 || window.innerWidth <= 1075 ? 'Results Team' : 'WRT';
    this.collapsedNav = window.innerWidth <= 1075;
  }

  isMobile(): boolean {
    return window.innerWidth <= 950;
  }

}

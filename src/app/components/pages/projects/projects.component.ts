import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { subContentAnimations } from 'src/app/animations';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [ subContentAnimations ]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  navItems: NavItem[] = [
    { title: 'JacobAmbrose.me', route: 'jacob-ambrose-me' },
    { title: 'SoutheastCubing.org', route: 'southeast-cubing-org' },
    { title: 'Other Projects', route: 'other' },
  ];
  collapsedNav: boolean = false;
  title: string = 'Personal Projects';

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title = window.innerWidth >= 1030 ? 'Personal Projects' : 'Projects';
    this.collapsedNav = window.innerWidth <= 1465;
  }

  ngAfterViewInit(): void {
     this.changeRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.title = window.innerWidth >= 1030 ? 'Personal Projects' : 'Projects';
    this.collapsedNav = window.innerWidth <= 1465;
  }

  isMobile(): boolean {
    return window.innerWidth <= 950;
  }

}

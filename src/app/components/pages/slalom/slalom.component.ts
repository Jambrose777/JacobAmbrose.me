import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { subContentAnimations } from 'src/app/animations';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'slalom',
  templateUrl: './slalom.component.html',
  styleUrls: ['./slalom.component.scss'],
  animations: [ subContentAnimations ]
})
export class SlalomComponent implements OnInit, AfterViewInit {
  navItems: NavItem[] = [
    { title: 'Slalom', route: 'slalom' },
    { title: 'Saia', route: 'saia' },
    { title: 'Delta', route: 'delta' },
    { title: 'Cox Auto', route: 'cox' },
    { title: 'Pulte', route: 'pulte' },
  ];

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.navItems[3].title = window.innerWidth > 1080 ? 'Cox Auto' : 'Cox';
  }

  ngAfterViewInit(): void {
     this.changeRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navItems[3].title = window.innerWidth > 1080 ? 'Cox Auto' : 'Cox';
  }

  isMobile(): boolean {
    return window.innerWidth <= 950;
  }

}

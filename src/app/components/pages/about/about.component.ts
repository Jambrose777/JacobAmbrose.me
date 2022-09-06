import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { subContentAnimations } from 'src/app/animations';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ subContentAnimations ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  navItems: NavItem[] = [
    { title: 'About Me', route: 'me' },
    { title: 'Hobbies', route: 'hobbies' },
    { title: 'Life', route: 'life' },
  ];

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     this.changeRef.detectChanges();
  }

  isMobile(): boolean {
    return window.innerWidth <= 950;
  }

}

import { Component, HostListener, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'slalom',
  templateUrl: './slalom.component.html',
  styleUrls: ['./slalom.component.scss']
})
export class SlalomComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'Slalom', route: 'slalom' },
    { title: 'Saia', route: 'saia' },
    { title: 'Delta', route: 'delta' },
    { title: 'Cox Auto', route: 'cox' },
    { title: 'Pulte', route: 'pulte' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.navItems[3].title = window.innerWidth > 1080 ? 'Cox Auto' : 'Cox';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navItems[3].title = window.innerWidth > 1080 ? 'Cox Auto' : 'Cox';
  }

}
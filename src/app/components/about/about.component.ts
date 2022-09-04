import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'About Me', route: 'me' },
    { title: 'Hobbies', route: 'hobbies' },
    { title: 'Life', route: 'life' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  @Input() baseRoute: string;
  @Input() collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'wca',
  templateUrl: './wca.component.html',
  styleUrls: ['./wca.component.scss']
})
export class WcaComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'WCA', route: 'wca' },
    { title: 'Regional Delegate', route: 'delegate' },
    { title: 'Results Team', route: 'results' },
    { title: 'Other Teams', route: 'teams' },
    { title: 'Competitor', route: 'competitor' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

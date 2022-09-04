import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'JacobAmbrose.me', route: 'jacob-ambrose-me' },
    { title: 'SoutheastCubing.org', route: 'southeast-cubing-org' },
    { title: 'WCA Statistics', route: 'wca-statistics' },
    { title: 'MKT Sheets', route: 'sheets' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

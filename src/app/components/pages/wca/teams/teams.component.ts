import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  stats = {
    deputy: 25,
  }

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContentfulEntry('stats').subscribe(res => {
      this.stats.deputy = res?.fields?.competitionsDeputied || this.stats.deputy;
    })
  }

}

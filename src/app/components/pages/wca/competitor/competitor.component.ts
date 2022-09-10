import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.scss']
})
export class CompetitorComponent implements OnInit {
  stats = {
    competed: 169,
  }

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContentfulEntry('stats').subscribe(res => {
      this.stats.competed = res?.fields?.competitionsCompeted || this.stats.competed;
    })
  }

}

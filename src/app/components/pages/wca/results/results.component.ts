import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  stats = {
    results_posted: 910,
  }

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContentfulEntry('stats').subscribe(res => {
      this.stats.results_posted = res?.fields?.resultsPosted || this.stats.results_posted;
    })
  }

}

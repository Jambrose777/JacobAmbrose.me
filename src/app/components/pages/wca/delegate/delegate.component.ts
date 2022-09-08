import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.scss']
})
export class DelegateComponent implements OnInit {
  stats = {
    competed: 169,
    organized: 55,
    delegated: 115,
  }

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContentfulEntry('stats').subscribe(res => {
      this.stats.competed = res?.fields?.competitionsCompeted || this.stats.competed;
      this.stats.organized = res?.fields?.competitionsOrganized || this.stats.organized;
      this.stats.delegated = res?.fields?.competitionsDelegated || this.stats.delegated;
    })
  }

  getPhoto(key: string): string {
    return this.contentfulService.getLoadedAsset(key);
  }

}

import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-southeast-cubing-org',
  templateUrl: './southeast-cubing-org.component.html',
  styleUrls: ['./southeast-cubing-org.component.scss']
})
export class SoutheastCubingOrgComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
  }

  getPhoto(key: string): string {
    return this.contentfulService.getLoadedAsset(key);
  }

}

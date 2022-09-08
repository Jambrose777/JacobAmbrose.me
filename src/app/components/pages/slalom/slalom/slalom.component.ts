import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'sub-slalom',
  templateUrl: './slalom.component.html',
  styleUrls: ['./slalom.component.scss']
})
export class SubSlalomComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
  }

  getPhoto(key: string): string {
    return this.contentfulService.getLoadedAsset(key);
  }

}

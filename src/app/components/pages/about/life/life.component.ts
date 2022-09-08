import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
  }

  getPhoto(key: string): string {
    return this.contentfulService.getLoadedAsset(key);
  }

}

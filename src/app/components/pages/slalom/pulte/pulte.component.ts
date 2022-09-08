import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-pulte',
  templateUrl: './pulte.component.html',
  styleUrls: ['./pulte.component.scss']
})
export class PulteComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
  }

  getPhoto(key: string): string {
    return this.contentfulService.getLoadedAsset(key);
  }

}

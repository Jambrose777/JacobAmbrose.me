import { Injectable } from '@angular/core';
import { Asset, ContentfulCollection, createClient, Entry, EntryCollection } from 'contentful';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { contentfulKeys } from '../models/contentful/contentfulKeys';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  assetUrls = {};

  constructor() { }

  getContentfulGroup(contentTypeKey: string): Observable<EntryCollection<any>>{
    return from(this.cdaClient.getEntries(Object.assign({content_type: contentfulKeys.contentTypeIds[contentTypeKey]})));
  }

  getContentfulEntry(key: string): Observable<Entry<any>> {
    return from(this.cdaClient.getEntry(contentfulKeys.entryIds[key]));
  }

  getContentfulAsset(key: string): Observable<Asset | ContentfulCollection<Asset>> {
    return from(this.cdaClient.getAsset(contentfulKeys.assetIds[key]));
  }

  retrieveAllContentfulAssets() {
    Object.keys(contentfulKeys.assetIds).forEach(asset => {
      this.getContentfulAsset(asset).subscribe(res => {
        this.assetUrls[asset] = res['fields']['file']['url'];
      })
    })
  }

  getLoadedAsset(key: string): string {
    return this.assetUrls[key];
  }
}

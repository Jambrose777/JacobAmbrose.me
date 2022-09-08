import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { contentAnimations, navAnimation, profileAnimation, navAnimationMobile, contentAnimationsOpenMobile } from './animations';
import { ContentfulService } from './services/contentful.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ contentAnimations, navAnimation, profileAnimation, navAnimationMobile, contentAnimationsOpenMobile ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'JacobAmbrose.me';
  previousWidth: number = 0;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private changeRef: ChangeDetectorRef, private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.previousWidth = window.innerWidth;

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
          const contentContainer = document.querySelector('.sub-router-container') || window;
          contentContainer.scrollTo({ top: 0 });
      });

    this.contentfulService.retrieveAllContentfulAssets();
  }

  ngAfterViewInit(): void {
     this.changeRef.detectChanges();
  }

  isMobile(): boolean {
    return window.innerWidth <= 950;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ((this.previousWidth > 950 && window.innerWidth <= 950) || (this.previousWidth <= 950 && window.innerWidth > 950)){
      if (this.router.url === '/home') {
        this.router.navigate(['/about'])
      }
      this.ngOnInit();
    }
    this.previousWidth = window.innerWidth;
  }

}

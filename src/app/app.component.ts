import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contentAnimations, navAnimation, profileAnimation, navAnimationMobile, contentAnimationsOpenMobile } from './animations';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ contentAnimations, navAnimation, profileAnimation, navAnimationMobile, contentAnimationsOpenMobile ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'JacobAmbrose.me';
  previousWidth: number = 0;

  constructor(private router: Router, private changeRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.previousWidth = window.innerWidth;
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

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GsapWrapper } from 'src/app/services/global-services/design-services/gsap-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild('appContent') appContent: ElementRef;

  ngOnInit(): void {
  }

  public getIsLearnMoreClickedFromChild($event: boolean): void {
    if ($event) {
      // let gsapWrapper = new GsapWrapper();
      // // gsapWrapper.scrollToHeight(730);
      // // gsapWrapper.fadeIn(this.appContent.nativeElement);
    }
  }

}

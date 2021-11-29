import { AfterViewInit, Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { GsapWrapper } from 'src/app/services/global-services/design-services/gsap-wrapper';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  @ViewChild('appBannerText') appBannerText: ElementRef;

  ngAfterViewInit() {
    let gsapWrapper = new GsapWrapper();
    gsapWrapper.fadeUp(this.appBannerText.nativeElement);
  }

  

}

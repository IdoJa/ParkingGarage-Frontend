import { AfterViewInit, Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { GsapWrapper } from 'src/app/services/global-services/design-services/gsap-wrapper';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Output()
  public isLearnMoreClickedEvent = new EventEmitter<boolean>();

  public outputToParent() {
    this.isLearnMoreClickedEvent.emit(true);
  }

}

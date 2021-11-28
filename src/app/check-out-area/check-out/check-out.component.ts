import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GsapWrapper } from 'src/app/services/global-services/design-services/gsap-wrapper';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('appCheckOut') appCheckOut: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let gsapWrapper = new GsapWrapper();
    gsapWrapper.fadeIn(this.appCheckOut.nativeElement);
  }

}

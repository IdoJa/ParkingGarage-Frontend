import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GsapWrapper } from 'src/app/services/global-services/design-services/gsap-wrapper';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements AfterViewInit {


  constructor() { }

  @ViewChild('appCheckIn') appCheckIn: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let gsapWrapper = new GsapWrapper();
    gsapWrapper.fadeIn(this.appCheckIn.nativeElement);
  }

}

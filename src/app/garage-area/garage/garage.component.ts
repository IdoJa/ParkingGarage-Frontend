import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GsapWrapper } from 'src/app/services/global-services/design-services/gsap-wrapper';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  constructor() { }

  @ViewChild('appGarage') appGarage: ElementRef;

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    let gsapWrapper = new GsapWrapper();
    gsapWrapper.fadeIn(this.appGarage.nativeElement);
  }
}

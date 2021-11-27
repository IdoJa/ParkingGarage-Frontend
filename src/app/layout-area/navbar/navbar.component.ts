import { Component, OnInit, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarStatus = 1; // for activate scroll - navbarStatus = 0

  constructor() { }

  ngOnInit(): void {
  }

  // Possible to apply the scroll as a service
  // when scrolling down apply class change for navbar
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Scroll) {
    // this.navbarStatus = 0;
    
    // if (window.pageYOffset > 0) {
    //   this.navbarStatus = 1;
    // }
  }
}

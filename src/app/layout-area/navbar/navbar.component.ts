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

  
}

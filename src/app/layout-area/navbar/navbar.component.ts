import { Component, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarStatus = 1; 

  constructor() { }

  ngOnInit(): void {
  }

  
}

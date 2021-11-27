import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout-area/layout/layout.component';
import { NavbarComponent } from './layout-area/navbar/navbar.component';
import { BannerComponent } from './home-area/banner/banner.component';
import { ContentComponent } from './home-area/content/content.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home-area/home/home.component';
import { CheckInComponent } from './check-in-area/check-in/check-in.component';
import { CheckInFormComponent } from './check-in-area/check-in-form/check-in-form.component';

// Material Ui Imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    BannerComponent,
    ContentComponent,
    HomeComponent,
    CheckInComponent,
    CheckInFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

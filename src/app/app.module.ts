import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout-area/layout/layout.component';
import { NavbarComponent } from './layout-area/navbar/navbar.component';
import { BannerComponent } from './home-area/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home-area/home/home.component';
import { CheckInComponent } from './check-in-area/check-in/check-in.component';
import { CheckInFormComponent } from './check-in-area/check-in-form/check-in-form.component';
import { CheckOutComponent } from './check-out-area/check-out/check-out.component';
import { CheckOutFormComponent } from './check-out-area/check-out-form/check-out-form.component';
import { HttpClientModule } from '@angular/common/http';

// Material Ui Imports
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { GarageComponent } from './garage-area/garage/garage.component';
import { GarageTableComponent } from './garage-area/garage-table/garage-table.component';





@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    CheckInComponent,
    CheckInFormComponent,
    CheckOutComponent,
    CheckOutFormComponent,
    GarageComponent,
    GarageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

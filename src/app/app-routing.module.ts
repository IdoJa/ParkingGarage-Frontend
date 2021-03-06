import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in-area/check-in/check-in.component';
import { CheckOutComponent } from './check-out-area/check-out/check-out.component';
import { GarageComponent } from './garage-area/garage/garage.component';
import { HomeComponent } from './home-area/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "check-in", component: CheckInComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "garage", component: GarageComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

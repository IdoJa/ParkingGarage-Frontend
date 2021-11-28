import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/models/vehicle/vehicle.model';
import { TicketsService } from 'src/app/services/parking-services/tickets.service';
import { VehiclesService } from 'src/app/services/parking-services/vehicles.service';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit {

  public vehicle: Vehicle = new Vehicle();
  public vehiclesList: string[];
  public ticketsList: string[];

  // Get form reference
  @ViewChild('vehicleFormInfo') vehicleFormInfo: NgForm;
  

  constructor(private vehiclesService: VehiclesService, private ticketsService: TicketsService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.vehiclesList = await this.vehiclesService.getAllVehiclesNames();
      console.log(this.vehiclesList);
    }
    catch (err) {
      console.log(err);
    }
  }



  public async getAllTickets(vehicleFormInfo: NgForm) {
    let selectedVehicleName = vehicleFormInfo.controls['class'].value;
    try {

      this.ticketsList = await this.ticketsService.getAllTicketNamesByVehicleName(selectedVehicleName);
      console.log(this.ticketsList);
    }
    catch (err) {
      console.log(err);
    }
  }
}

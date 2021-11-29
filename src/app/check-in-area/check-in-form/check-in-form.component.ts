import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/models/vehicle/vehicle.model';
import { NotificationService } from 'src/app/services/global-services/notification.service';
import { TicketsService } from 'src/app/services/parking-services/tickets.service';
import { VehiclesService } from 'src/app/services/parking-services/vehicles.service';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit {

  public vehicle: Vehicle = new Vehicle();
  public vehicleName: string;
  public vehiclesList: string[];
  public ticketsList: string[];

  // setting max number (int32) to let backend check dimensions
  public maxNumber = 2147483647;

  // Get form reference
  @ViewChild('vehicleFormInfo') vehicleFormInfo: NgForm;
  

  constructor(private vehiclesService: VehiclesService, private ticketsService: TicketsService,
              private notificationService: NotificationService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.vehiclesList = await this.vehiclesService.getAllVehiclesNames();
    }
    catch (err) {
      this.notificationService.error(err);
    }
  }



  public async getAllTickets(vehicleFormInfo: NgForm) {
    let selectedVehicleName = vehicleFormInfo.controls['vehicleName'].value;
    console.log(selectedVehicleName);
    if (selectedVehicleName === undefined) {
      return;
    }

    try {
      this.ticketsList = await this.ticketsService.getAllTicketNamesByVehicleName(selectedVehicleName);
    }
    catch (err) {
      this.notificationService.error(err);
    }
  }

  public async checkIn(): Promise<void> {
    if (!this.vehicleFormInfo.valid) {
      this.notificationService.error("Please make sure all fields are filled and correct");
      return;
    }

    try {
      const vehicleResponse = await this.vehiclesService.createVehicle(this.vehicle);
      this.notificationService.success(`Check In Successfully! <br> Vehicle is parking on lot ${vehicleResponse.parkingLot.id}`);
    } catch (err) {
      this.notificationService.error(err);
    }
  }
}

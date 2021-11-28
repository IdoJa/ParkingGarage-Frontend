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



  public async test(vehicleFormInfo: NgForm) {
    let selectedVehicleName = vehicleFormInfo.controls['class'].value;
    try {

      this.ticketsList = await this.ticketsService.getAllTicketNamesByVehicleName(selectedVehicleName);
      console.log(this.ticketsList);
    }
    catch (err) {
      console.log(err);
    }







    // this.reset();
    
    // let selectedVehicleClassValue = vehicleFormInfo.controls['class'].value;
    // console.log(selectedVehicleClassValue);
    // let vehicleListCopy = { ...this.vehiclesList };

    // console.log(this.vehiclesList);
    // console.log(vehicleListCopy);
    // console.log(this.vehiclesList);
    // console.log(this.vehiclesList.indexOf(selectedVehicleClassValue));
    // console.log("Length ", this.vehiclesList.length);
    // console.log(vehicleListCopy[this.vehiclesList.indexOf(selectedVehicleClassValue)]);

    // let selectionIndex = this.vehiclesList.indexOf(selectedVehicleClassValue);
    
    // // from 'Motorcycle' to 'Van' show 'Vip', 'Regular'
    // if (selectionIndex >= 0 && selectionIndex < this.vehiclesList.length - 1) {
    //   this.ticketList.pop();
      
    // }

    // console.log(this.ticketList);


    
  }


  public checkSelectedVehicle(vehicleFormInfo: NgForm) {
    let selectedVehicleClassValue = vehicleFormInfo.controls['class'].value;
    let vehicleListCopy = this.vehiclesList;
    let ticketsToShow = this.ticketsList;
    let counter = 0;

    vehicleListCopy.pop();

    console.log(this.ticketsList);
    // remove 'Regular' from ticketList if selectedVehicle is from 'Motorcycle' to 'Van'
    // vehicleListCopy.forEach((e) => selectedVehicleClassValue === e ? ticketsToShow.pop() : 'b');
    //vehicleListCopy.forEach((e) => this.test(selectedVehicleClassValue, e));

    // vehicleListCopy.forEach((e) => {
    //   if (selectedVehicleClassValue === e) {
    //     ticketsToShow.pop();
    //   } else {
    //     selectedVehicleClassValue === 'B';
    //     ticketsToShow.pop();
    //   }
    // });

    vehicleListCopy.includes('Truck');

    console.log(vehicleListCopy);
    console.log(ticketsToShow);



    //console.log(this.ticketList);
   // console.group(ticketsToShow);

    // if (selectedVehicleClassValue === 'Motorcycle' ) {

    // }
      
    console.log(counter);
      
      // else if value != null then VIP
  }
}

import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/global-services/notification.service';
import { VehiclesService } from 'src/app/services/parking-services/vehicles.service';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {

  public licensePlateId: string;

  constructor(private vehiclesService: VehiclesService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public async checkOut(): Promise<void> {
    try {
      await this.vehiclesService.deleteVehicle(this.licensePlateId);
      this.notificationService.success(`Check Out Successfully!`);
    }
    catch (err) {
      this.notificationService.error(err);
    }
  }
}

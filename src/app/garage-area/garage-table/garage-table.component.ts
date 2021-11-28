import { Component, OnInit } from '@angular/core';
import { ParkingLot } from 'src/app/models/parking-lot/parking-lot.model';
import { NotificationService } from 'src/app/services/global-services/notification.service';
import { ParkingLotsService } from 'src/app/services/parking-services/parking-lots.service';

@Component({
  selector: 'app-garage-table',
  templateUrl: './garage-table.component.html',
  styleUrls: ['./garage-table.component.css']
})
  
export class GarageTableComponent implements OnInit {

  public parkingLotsList: ParkingLot[];

  public displayedColumns: string[] = ['Id', 'LicensePlateId'];

  constructor(private parkingLotsService: ParkingLotsService, private notificationService: NotificationService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.parkingLotsList = await this.parkingLotsService.getAllParkingLots();
      console.log(this.parkingLotsList); // TODO: Delete
    }
    catch (err) {
      this.notificationService.error(err);
    }
  }

 



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParkingLot } from 'src/app/models/parking-lot/parking-lot.model';
import { EnvironmentService } from '../global-services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotsService {

  private url = this.environmentService.parkingLotsUrl;

  constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) { }

  public async getAllParkingLots(): Promise<ParkingLot[]> {
    return await this.httpClient.get<ParkingLot[]>(`${this.url}`).toPromise();
  }
}

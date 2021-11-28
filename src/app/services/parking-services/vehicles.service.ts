import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle/vehicle.model';
import { EnvironmentService } from '../global-services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private url = this.environmentService.vehiclesUrl;

  constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) { }

  // Get vehicles names
  public async getAllVehiclesNames(): Promise<string[]> {
    return await this.httpClient.get<string[]>(`${this.url}/vehiclesNames`).toPromise();
  }

  public async createVehicle(vehicle: Vehicle): Promise<Vehicle> {
    return await this.httpClient.post<Vehicle>(`${this.url}`, vehicle).toPromise();
  }
}

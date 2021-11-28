import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../global-services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private url = this.environmentService.ticketsUrl;

  constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) { }

  // Get all ticket names by vehicle name
  public async getAllTicketNamesByVehicleName(vehicleName: string): Promise<string[]> {
    return await this.httpClient.get<string[]>(`${this.url}/${vehicleName}`).toPromise();
  }
}

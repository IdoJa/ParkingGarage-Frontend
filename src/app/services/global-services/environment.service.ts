import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  public readonly vehiclesUrl = `${environment.apiServerUrl}` + '/api/vehicles';
  public readonly ticketsUrl = `${environment.apiServerUrl}` + '/api/tickets';

}

import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notyf = new Notyf({ duration: 4000, ripple: true, position: { x: "left", y: "top" } });

  public constructor(private errorsService: ErrorsService) { }

  public success(message: string): void {
    this.notyf.success(message);
  }

  public error(err: any): void {
    this.notyf.error(this.errorsService.getError(err));
  }
}

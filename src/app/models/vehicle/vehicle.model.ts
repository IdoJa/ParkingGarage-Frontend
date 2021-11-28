import { ParkingLot } from "../parking-lot/parking-lot.model";

export class Vehicle {
    public licensePlateId: string;
    public name: string;
    public phone: string;
    public ticket: string;
    public height: number;
    public width: number;
    public length: number;
    public parkingLot: ParkingLot;
}
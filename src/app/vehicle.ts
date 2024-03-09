import { Model } from "./model";

export class Vehicle {

    vehicleid!: number;
    vin!: string;

    models!: Model;

    color!: string;

    isNew!: Boolean;

    bodystyle!: string;

    transmission!: number;

    interior!: string;

     year!: number;

     msrp!: number;

     mileage!: number;

     description!: string;

    photo!: string;

    featured!: boolean;
    
    issold!: boolean;
    
    saleprice!: number;

}

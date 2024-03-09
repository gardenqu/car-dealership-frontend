import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicle } from './vehicle';
import { VehicleServiceService } from './vehicle-service.service';
import { NgFor, CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'car-dealership';

  public vehicles:Vehicle[]=[];
  public newVehicles:Vehicle[]=[];
  public oldVehicle:Vehicle[]=[];
  public vehicle:Vehicle = new Vehicle;
  constructor(private vehicleService: VehicleServiceService) {} //allows for making request to backend
  
  ngOnInit(): void {
    this.getVehicles()
    this.getNewVehicles()
    this.getVehicle('your-vehicle-id')
  }

  public getVehicles(): void{
    this.vehicleService.getVehicles().subscribe(
      (response: Vehicle[])=>{
        this.vehicles=response;
      
      },(error:HttpErrorResponse)=>alert(error.message)
    );
  }




  
  public getNewVehicles():void{
    this.vehicleService.getNewVehicles().subscribe( 
      (response: Vehicle[])=>{
        this.newVehicles=response;
        console.log(this.newVehicles)
      
      },(error:HttpErrorResponse)=>alert(error.message)
    );

  }

  public getOldVehicles():void{
    this.vehicleService.getVehicles().subscribe(
      (response: Vehicle[])=>{
        this.vehicles=response;
      
      },(error:HttpErrorResponse)=>alert(error.message)
    );
  }


  public getVehicle(id:string ):void{

    this.vehicleService.getVehicle(id).subscribe(
      (response:Vehicle)=>{
        this.vehicle=response
      }
    )
  } //i think we might need a vehicle component for this

}

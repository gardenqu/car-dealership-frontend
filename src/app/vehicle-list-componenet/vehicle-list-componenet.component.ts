import { NgFor, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleServiceService } from '../vehicle-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-list-componenet',
  standalone: true,
  imports: [NgFor,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './vehicle-list-componenet.component.html',
  styleUrl: './vehicle-list-componenet.component.css'
})
export class VehicleListComponenetComponent implements OnInit {

  public vehicles:Vehicle[]=[];
  public newVehicles:Vehicle[]=[];
  public oldVehicle:Vehicle[]=[];
  constructor(private vehicleService: VehicleServiceService) {} //allows for making request to backend
  ngOnInit(): void {
    this.getVehicles(1, 10, 'asc', 'salePrice')
    this.getNewVehicles(1, 10, 'asc', 'salePrice')
  }

  public getVehicles(page: number, size: number, order: string, sortBy: string): void{
    this.vehicleService.getVehicles(page, size, order, sortBy)
    .subscribe(vehicles => this.vehicles = vehicles);
  }

  public getNewVehicles(page: number, size: number, order: string, sortBy: string):void{
    this.vehicleService.getNewVehicles(page, size, order, sortBy).subscribe( 
      (response: Vehicle[])=>{
        this.newVehicles=response;
        console.log(this.newVehicles)
      
      },(error:HttpErrorResponse)=>alert(error.message)
    );

  }

  public getOldVehicles(page: number, size: number, order: string, sortBy: string):void{
    this.vehicleService.getUsedVehicles(page, size, order, sortBy).subscribe(
      (response: Vehicle[])=>{
        this.vehicles=response;
      
      },(error:HttpErrorResponse)=>alert(error.message)
    );
  }

  //need a new component called the search componenet 







}

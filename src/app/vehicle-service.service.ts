import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(private http:HttpClient) {}
  private apiService=environment.apiUrl

  public getVehicles(): Observable<Vehicle[]>{
    var listOfVehicles= this.http.get<Array<Vehicle>>(`${this.apiService}/inventory/all`) // the http service needs a uri to connect it with the backend

    return listOfVehicles;

  }

  public getNewVehicles(): Observable<Vehicle[]>{
    var listOfVehicles= this.http.get<Array<Vehicle>>(`${this.apiService}/inventory/new`) // the http service needs a uri to connect it with the backend

    return listOfVehicles;

  }

  public getUsedVehicles(): Observable<Vehicle[]>{
    var listOfVehicles= this.http.get<Array<Vehicle>>(`${this.apiService}/inventory/used`) // the http service needs a uri to connect it with the backend

    return listOfVehicles;

  }

  public getVehicle(id:String): Observable<Vehicle>{
    var listOfVehicles= this.http.get<Vehicle>(`${this.apiService}/inventory/${id}`) // the http service needs a uri to connect it with the backend

    return listOfVehicles;

  }




}

import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { environment } from '../environments/environment.development';
import { Model } from './model';
import { Make } from './make';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(private http:HttpClient) {}
  private apiService=environment.apiUrl

  public getVehicles(page: number, size: number, order: string, sortBy: string): Observable<Vehicle[]>{
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('order', order)
      .set('sortBy', sortBy);

    // Make HTTP GET request with parameters
    return this.http.get<Vehicle[]>(`${this.apiService}/search`, { params: params })

  }

  public getModels(): Observable<Model[]>{
    var listOfModels=this.http.get<Array<Model>>(`${this.apiService}/inventory/models`) // the http service needs a uri to connect it with the backend

    return listOfModels;
  }

  public getMakes(): Observable<Make[]>{
    var listOfMakes=this.http.get<Array<Make>>(`${this.apiService}/inventory/makes`) 

    return listOfMakes;
  }


  public getNewVehicles(page: number, size: number, order: string, sortBy: string): Observable<Vehicle[]>{
    let params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString())
    .set('order', order)
    .set('sortBy', sortBy);

  // Make HTTP GET request with parameters
  return this.http.get<Vehicle[]>(`${this.apiService}/new`, { params: params })

  }

  public getUsedVehicles(page: number, size: number, order: string, sortBy: string): Observable<Vehicle[]>{
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('order', order)
      .set('sortBy', sortBy);

    // Make HTTP GET request with parameters
    return this.http.get<Vehicle[]>(`${this.apiService}/used`, { params: params })

  }

  public getVehicle(vin:String): Observable<Vehicle>{
    var vehicle= this.http.get<Vehicle>(`${this.apiService}/inventory/details/${vin}`) // the http service needs a uri to connect it with the backend

    return vehicle;

  }

  public updateVehicle(vin: string, updatedVehicle: Vehicle): Observable<Vehicle>{
    
    return  this.http.put<Vehicle>(`${this.apiService}/inventory/details/${vin}`, updatedVehicle); 
  }


  public addVehicle(vehicle: Vehicle): Observable<Vehicle> {
  
    console.log("URL  "+`${this.apiService}/inventory/addVehicle`)
    return this.http.post<Vehicle>(`${this.apiService}/inventory/addVehicle`, vehicle);
  }


  public deleteVehicle(vin:String): Observable<String> {
    console.log("Delete Vehicle");
    return this.http.delete<String>(`${this.apiService}/inventory/details/${vin}`);
  }

}

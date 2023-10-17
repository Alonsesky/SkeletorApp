import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { apiResponse } from '../models/apiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  async getRegion(){
    return await lastValueFrom(this.http.get<apiResponse<any>>(`${environment.apiUrl}region`));
  }

  async getComuna(idRegion:number){
    return await lastValueFrom(this.http.get<apiResponse<any>>(`${environment.apiUrl}comuna/`+ idRegion));
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleList } from '../models/role.model';
import { DesignationList } from '../models/designation.model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }

  // getAllDesignation():Observable<any>{
  //   return this.http.get<any>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation')
  // }

  // getRoles():Observable<any>{
  //   return this.http.get<any>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
  // }
  getAllDesignation(): Observable<DesignationList> {
  return this.http.get<DesignationList>('https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation');
}

getRoles(): Observable<RoleList> {
  return this.http.get<RoleList>('https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles');
}

}

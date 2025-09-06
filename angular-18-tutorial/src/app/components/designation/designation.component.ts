import { Component, inject, Inject, OnInit } from '@angular/core';
import { DesignationService } from '../../services/designation.service';
import { CommonModule } from '@angular/common';
import { Designation } from '../../models/designation.model';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
designations:Designation[]=[];
rolesList:any[]=[];
  designationService = inject(DesignationService);

  ngOnInit(): void {
    this.designationService.getAllDesignation().subscribe((data:any) =>{
      this.designations= data;
      console.log(this.designations)
    })
this.getRoleList();
 
  }

  getRoleList(){
     this.designationService.getRoles().subscribe((data:any) =>{
      this.rolesList= data.data;
      console.log(this.rolesList)
    })
  }
}

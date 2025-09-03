import { Component, inject, OnInit } from '@angular/core';
import { DesignationService } from '../../services/designation.service';
import { CommonModule } from '@angular/common';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
roleList:Role[]=[];
  designationService = inject(DesignationService);

  ngOnInit(): void {
    this.getRoleList();
  }

  getRoleList(){
     this.designationService.getRoles().subscribe((data:any) =>{
      this.roleList= data.data;
      console.log(this.roleList)
    })
  }

}

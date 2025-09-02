import { Component, inject, Inject, OnInit } from '@angular/core';
import { DesignationService } from '../../services/designation.service';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
designations:any[]=[];
  designationService = inject(DesignationService);

  ngOnInit(): void {
    this.designationService.getAllDesignation().subscribe((data:any) =>{
      this.designations= data;
      console.log(this.designations)
    })
  }
}

export interface DesignationList{
    message: string;
    result: boolean;
  data: Designation[];
  
}

export interface Designation {
  designationId: number;
  designation: string;
}
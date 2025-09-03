export interface RoleList{
    message: string;
    result: boolean;
  data: Role[];
  
}

export interface Role {
  roleId: number;
  role: string;
}
import {Action as NgrxAction} from '@ngrx/store';

export interface Action extends NgrxAction {
  payload: any;
}
export interface IUserForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password2: string;
}

export interface IUser {
  username: string;
  email: string;
  avatar: string;
  firstname: string;
  lastname: string;
  role: IRole;
}

export interface IPermission {
  title: string;
  key: string;
  group: string;
}

export interface IRole {
  id: number;
  title: string;
  permissions: Array<IPermission>;
}

declare global {
  export interface Window {
    io: any;
  }
}

export interface SidebarWidgetItem {
  title?: string;
  value?: string | {
    amount: any;
    unit: string;
  };
  icon?: string;
}

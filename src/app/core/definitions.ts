export interface IUser {
  username: string;
  email: string;
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

export interface IResponse {
  apiVersion?: string;
  context?: string;
  id?: string;
  params?: {
    id?: string
  };
  data?: {
    kind?: string;
    fields?: string;
    etag?: string;
    id?: string;
    lang?: string;
    updated?: string;
    deleted?: boolean;
    currentItemCount?: Number;
    itemsPerPage?: Number;
    startIndex?: Number;
    totalItems?: Number;
    pageIndex?: Number;
    totalPages?: Number;
    items?: Array<any>
  };
  error?: {
    code?: Number;
    message: string;
    errors?: Array<{
      domain?: string;
      reason?: string;
      message?: string;
      location?: string;
      locationType?: string;
      extendedHelp?: string;
      sendReport?: string;
    }>
  };
}

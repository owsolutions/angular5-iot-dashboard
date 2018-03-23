import { IResponse } from 'response-type';

export interface IUserForm {
  email: string;
  password: string;
}

export function GetNetworkError (): IResponse<any> {
  return {
    error: {
      code: 0,
      message: 'It seems you are not connected to internet. Please check your connection and try again'
    }
  };
}

/**
 * Configurates the way that user module works.
 */
export interface NgxUserConfig {
  signupUrl: string;
  signinUrl: string;
  forgetPasswordUrl: string;
}

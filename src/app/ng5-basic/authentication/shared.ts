export interface IUserForm {
  email: string;
  password: string;
}

/**
 * Configurates the way that user module works.
 */
export interface NgxUserConfig {
  signupUrl: string;
  signinUrl: string;
  forgetPasswordUrl: string;
}

export interface LoginResponse {
  token: string;
  user: any;
}

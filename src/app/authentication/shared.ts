import { IResponse } from 'response-type';

export interface IUserForm {
  email: string;
  password: string;
}

export async function createUserMock (form: IUserForm): Promise<IResponse<any>> {
  function hasUnvalidFields(vpc: IUserForm): Array<any> {
    const errors = [];
    if ( ! vpc.email ) {
      errors.push({
        location: 'email',
        message: 'Please provide the email'
      });
    }

    if ( ! vpc.password ) {
      errors.push({
        location: 'password',
        message: 'Please provide a strong password'
      });
    }
    return errors;
  }
  if (hasUnvalidFields(form).length) {
    return {
      error: {
        code: 1,
        message: 'Please fix the errors within the form',
        errors: hasUnvalidFields(form)
      }
    };
  }
  return {
    data: {
      items: [
        form
      ]
    }
  };
}


export async function userLoginMock (form: IUserForm): Promise<IResponse<any>> {
  function hasUnvalidFields(vpc: IUserForm): Array<any> {
    const errors = [];
    if ( ! vpc.email ) {
      errors.push({
        location: 'email',
        message: 'Please provide the email'
      });
    }

    if ( ! vpc.password ) {
      errors.push({
        location: 'password',
        message: 'Please provide a strong password'
      });
    }
    return errors;
  }
  if (hasUnvalidFields(form).length) {
    return {
      error: {
        code: 1,
        message: 'Please fix the errors within the form',
        errors: hasUnvalidFields(form)
      }
    };
  }
  return {
    data: {
      items: [
        form
      ]
    }
  };
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

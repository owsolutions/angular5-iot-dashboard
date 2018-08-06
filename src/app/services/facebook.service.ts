import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var FB: any;

interface IFacebookResponse {
  authResponse: {
    accessToken: any;
    expiresIn: any;
    reauthorize_required_in: any;
    signedRequest: any;
    userID: any;
  };
  status: 'connected' | 'unknown';
}
interface IFBAuthInformation {
  facebook_id: string;
  facebook_token: string;
}
interface IFacebookUser {
  name: '';
  email?: '';
}

@Injectable()
export class FacebookService {

  private latestRespone: IFacebookResponse;
  private facebookUser: IFacebookUser = {
    name: null
  };

  constructor(
    private http: HttpClient,
  ) { }

  async getGraphAPI(user, token): Promise<any> {
    const url = `https://graph.facebook.com/v3.0/${user}?access_token=${token}`;
    return await this.http.get(url).toPromise() as any;
  }

  public IsLoggedInByFacebook (): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        FB.getLoginStatus(async (response: IFacebookResponse) => {
          console.log(response);
          if (response.status === 'connected') {

            const data = await this.getGraphAPI(response.authResponse.userID, response.authResponse.accessToken);
            if (data && data.name) {
              this.facebookUser.name = data.name;
            }
            if (data && data.email) {
              this.facebookUser.email = data.email;
            }
            this.latestRespone = response;
            resolve(true);
          } else {

            resolve(false);
          }
        });
      }, 1000);
    });
  }

  /**
   * Returns useful information that you can use to authenticate your third party software.
   */
  public GetUserAuthenticationInformation (): IFBAuthInformation {
    return {
      facebook_id: this.latestRespone.authResponse.userID,
      facebook_token: this.latestRespone.authResponse.accessToken,
    };
  }

}

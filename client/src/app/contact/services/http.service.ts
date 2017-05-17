import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, XHRBackend} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions) {
    let token = localStorage.getItem('auth_token');
    options.headers.set('Authorisation', 'Bearer ${token}');
    super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('auth_token');
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', 'Bearer ${token}');
    } else {
      url.headers.set('Authorization', 'Bearer ${token}');
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError(self: HttpService) {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        console.log(res);
      }
      return Observable.throw(res);
    };
  }

}

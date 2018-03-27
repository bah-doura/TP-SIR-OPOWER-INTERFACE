import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  private promise;
   api = 'http://localhost:8090/rest';
   home = '/home';
  constructor(private httpClient: HttpClient) {
  }

  getListAllHomes() {
    this.promise = new Promise((resolve, reject) => {

      return this.httpClient.get(this.api + this.home).subscribe(
        res => {
          resolve(res);
        });
    });
    return  this.promise;
  }

}

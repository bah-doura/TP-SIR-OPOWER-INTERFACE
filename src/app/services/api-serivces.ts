import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class ApiService {

  private promise;
   api = 'http://localhost:8090/rest';
   home = '/home';
  private httpParams: HttpParams;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});


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

  getHomeById(id) {
    this.promise = new Promise((resolve, reject) => {
      this.httpClient.get(this.api + this.home + '/' + id ).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        error2 => reject());
    });
    return this.promise;
  }


  creatHome(size: number, nbp: number) {
    const homeModel = {taille: size, nbP: nbp };
    const body = JSON.stringify(homeModel);
    this.promise = new Promise((resolve, reject) => {
      this.httpClient.post(this.api + this.home, JSON.stringify(homeModel), {headers : this.headers}).subscribe(
        res => {
          resolve();
        });
    });
    return this.promise;
  }

  deleteHome(homeId: number) {
      return this.httpClient.delete(this.api + this.home + '/' + homeId );
  }

  updateHome(size: number, nbp: number, homeId: number) {
    const homeModel = {taille: size, nbP: nbp };
    const body = JSON.stringify(homeModel);
    this.promise = new Promise((resolve, reject) => {
      this.httpClient.put(this.api + this.home + '/' + homeId, JSON.stringify(homeModel), {headers : this.headers}).subscribe(
        res => {
          resolve();
        });
    });
    return this.promise;
  }




}

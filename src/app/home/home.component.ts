import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api-serivces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listHome = [];
  constructor(private apiService: ApiService, private  router: Router) { }

  ngOnInit() {
    this.apiService.getListAllHomes().then(
      (data:  any[]) => {
        this.listHome = data;
        console.log(this.listHome);
      }

    );
  }

  OncreateHome() {
    console.log('test')
    this.router.navigate(['/create-home/']);

  }

}

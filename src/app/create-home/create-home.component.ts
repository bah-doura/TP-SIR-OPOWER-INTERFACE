import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api-serivces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {

  homesize: number;
  homenbp: number;
  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  OncreateHome(form: NgForm) {
    this.homesize = form.value.homeSize;
    this.homenbp = form.value.homeNbp;
    this.apiService.creatHome(this.homesize, this.homenbp).then(
      this.router.navigate(['/home'])
    );

  }

}

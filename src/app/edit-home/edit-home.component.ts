import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api-serivces';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  homesize: number;
  homenbp: number;
  homeId: number;
  home: any;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.homeId = params['id'];
          this.apiService.getHomeById(this.homeId).then(
            (home) => {
              this.home = home;
              console.log(home);
              this.homenbp = home.nbP;
              this.homesize = home.taille;
            },
            () => {
              this.router.navigate(['/home']);
            }
          );

        }
      );
  }


  OnEditHome(form: NgForm) {
    this.homesize = form.value.homeSize;
    this.homenbp = form.value.homeNbp;
      this.apiService.updateHome(this.homesize, this.homenbp, this.homeId).then(
        () => {this.router.navigate(['/home']); }
      );
  }
}

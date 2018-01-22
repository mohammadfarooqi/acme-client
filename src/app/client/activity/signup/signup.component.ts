import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private api = environment.apiurl;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  log(x) { console.log(x); }

  onSubmit(obj) {
    console.log(obj);

    const objToPost = {
      FirstName: obj.firstName,
      LastName: obj.lastName,
      Email: obj.email,
      Activity: obj.activity,
      Comment: obj.comment
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    this.http.post(this.api + '/api/Users', JSON.stringify(objToPost), new RequestOptions({headers})).subscribe(
      () => {
        // forward to /activity/list
        console.log('post successful');
        this.router.navigateByUrl('/activity/list');
      },
      err => {
        console.log(err);
      }
    );
  }
}

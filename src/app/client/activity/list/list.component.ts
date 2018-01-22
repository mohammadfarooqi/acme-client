import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private api = environment.apiurl;

  data: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.api + '/api/Users').subscribe(
      (data: Response) => {
        // forward to /activity/list
        console.log('data received => ', JSON.stringify(data));
        this.data = data.json();
      },
      err => {
        console.log(err);
      }
    );
  }
}

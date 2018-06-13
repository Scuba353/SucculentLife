import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sharable',
  templateUrl: './sharable.component.html',
  styleUrls: ['./sharable.component.css']
})
export class SharableComponent implements OnInit {
  allplants: any

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

    ngOnInit() {
  
      this.getallplants()

    }


    getallplants(){
      let observable= this._httpService.getall();
      observable.subscribe(data => {console.log("Got our tasks!", data)
      console.log("data from get all plants", data)
      this.allplants= data['allplants']
      console.log("this.allplants", this.allplants)
      // console.log("data from get all plants", data)
      })
    }
  
}  
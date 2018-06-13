import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  succulentRequest: any
  id: any
 
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.getid()
    this.succulentRequest= {reqname: "", reqemail: "", reqpickup: false, reqaddress:"", reqother:""}
  }
  getid(){
    this._route.params.subscribe(data => {
      console.log(data)
      this.id=data['id']
      console.log(this.id)
    })
  }

  addsucculentRequest(id){
    let observable= this._httpService.updateRequest(this.id, this.succulentRequest)
    observable.subscribe(data => {console.log("Update!", data)
      this._router.navigate(['/sharable'])
    });
  }
  




}

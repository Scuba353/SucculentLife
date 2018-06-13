import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-responce',
  templateUrl: './responce.component.html',
  styleUrls: ['./responce.component.css']
})
export class ResponceComponent implements OnInit {
  newresponce: any
  myerrors: any
  id: any
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.newresponce= {answer:"", responder:""}
    this.getid()
  }

  getid(){
    this._route.params.subscribe(data => {
      console.log(data)
      this.id=data['id']
      console.log(this.id)
    })
  }

  addResponce(){
    console.log("rueben said", this.newresponce)
    let observable= this._httpService.addAnswer(this.id, this.newresponce);
    observable.subscribe(data => {
      if(data['errors']){
        this.myerrors=data['errors']
      }
      else{
        console.log("success", this.newresponce)
        console.log(data)
        this._router.navigate(['/q_a']) 
      }
    }) 
  }
  }






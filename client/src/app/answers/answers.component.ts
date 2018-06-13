import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  questionanswer:any
  id: any
  newanswer: any
  
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this.getid()
    this.newanswer= {answers: {answer:"", responder:""}}
  }

  getid(){
    this._route.params.subscribe(data => {
      console.log(data)
      this.id=data['id']
      console.log(this.id)
    })
      //gets single user from Http.Service
      console.log(this.id)
      let observable= this._httpService.getSingle(this.id);
      observable.subscribe(moredata => {
        console.log("Got our single question!")
        this.questionanswer= moredata
        console.log(moredata)
      })
  }




}

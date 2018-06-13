import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-q-a',
  templateUrl: './q-a.component.html',
  styleUrls: ['./q-a.component.css']
})
export class QAComponent implements OnInit {
  newQuestion: any
  myerrors:any 
  allquestions: any
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

    ngOnInit() {
      this.newQuestion= {poster: "", question: ""}
      this.getallQuestions()
    }

  addQuestion(){
    console.log("rueben said", this.newQuestion)
    let observable= this._httpService.addnewquestion(this.newQuestion);
    observable.subscribe(data => {
      if(data['errors']){
        this.myerrors=data['errors']
      }
      else{
        console.log("success", this.newQuestion)
        console.log(data)
        this.getallQuestions()
        this._router.navigate(['/q_a']) 
      }
    }) 
  }

  getallQuestions(){
    let observable= this._httpService.allquestions();
    observable.subscribe(data => {console.log("Got our tasks!", data)
    console.log("data from get all plants", data)
    this.allquestions= data['allquestions']
    console.log("this.allquestions", this.allquestions)
    // console.log("data from get all plants", data)
    })
  }

  




}

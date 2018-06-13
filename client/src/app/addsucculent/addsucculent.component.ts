import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addsucculent',
  templateUrl: './addsucculent.component.html',
  styleUrls: ['./addsucculent.component.css']
})
export class AddsucculentComponent implements OnInit {
  newSucculent: any
  myerrors: any
 
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

    ngOnInit() {
      this.newSucculent= {name: "", email: "", city: "", color:"", otherdesc:"", cuttingtype:""}
    }
  
  addnewSucculent(){
    console.log("rueben said", this.newSucculent)
    let observable= this._httpService.addPlant(this.newSucculent);
    observable.subscribe(data => {
      if(data['errors']){
        this.myerrors=data['errors']
      }
      else{
        console.log("success", this.newSucculent)
        console.log(data)
        this._router.navigate(['/sharable']) 
      }
    }) 
  }

  
}

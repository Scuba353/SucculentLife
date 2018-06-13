import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getall(){
    return this._http.get('/all')
  }

  allquestions(){
    return this._http.get('/questions')
  }

  getSingle(id){
    console.log("got to the service")
    return this._http.get('/answer/'+id);
  }

  addPlant(newSucculent){
    return this._http.put('/new', newSucculent)
  }

  addAnswer(id, newresponce){
    console.log("service id", id)
    console.log("service newresponce", newresponce)
    return this._http.put('/newanswer/'+id, newresponce)
  }

  // deleteSingle(id){
  //   return this._http.delete('delete/' + id)
  // }



  updateRequest(_id, succulentRequest){
    // console.log("service id", _id)
    // console.log("service succulentRequest", succulentRequest)
    return this._http.put('/request/'+_id, succulentRequest)
  }

  addnewquestion(newQuestion){
    console.log("newquestion made it to the service")
    return this._http.post('/newquestion/', newQuestion)
  }


}


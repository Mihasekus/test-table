import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class TableService {

  constructor(private _http: HttpClient) {
  }

  getData() {
    return this._http.get('get');
  }


  saveData(data) {
    return this._http.post('post', data);
  }


}

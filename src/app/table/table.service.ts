import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class TableService {

  constructor(private _http: HttpClient) {
  }

  getData(limit?, offset?) {
    return this._http.get('get?limit=' + limit + '?offset=' + offset);
  }


  saveData(data) {
    return this._http.post('post', data);
  }


}

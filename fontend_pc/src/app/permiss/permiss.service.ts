import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FETCH_LATENCY = 500;
@Injectable()
export class PermissService{
  constructor(private http:HttpClient ){
  }
  addPermiss(data) {
    return this.http.post('/api/permiss', data);
  }
  getList(params){
    return this.http.get('/api/permiss/list', params);
  }
}

export class List {
  constructor(public id: number, public permiss_name: string, public permiss_code: string) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
  }
  add(data) {
    return this.http.post('/api/account', data);
  }
  getList(params) {
    return this.http.get('/api/account/list', { params: params });
  }
  edit(id, params) {
    return this.http.get('/api/account/' + id, { params: params });
  }
  delete(id) {
    return this.http.get('/api/account/' + id);
  }
}

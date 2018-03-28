import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {
  }
  add(data) {
    return this.http.post('/api/role', data);
  }
  getList(params) {
    return this.http.get('/api/role/list', { params: params });
  }
  edit(id, params) {
    return this.http.get('/api/role/' + id, { params: params });
  }
  delete(id) {
    return this.http.get('/api/role/' + id);
  }
}

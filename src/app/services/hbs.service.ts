import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HbsService {
  constructor(private httpClient: HttpClient) {}

  getNavbar() {
    return this.httpClient.get('/api/users/navbar', {
      responseType: 'text',
    });
  }
}

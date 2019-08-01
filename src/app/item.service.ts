import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems() {
    return this.http.get('http://159.65.229.59/stories');
  }
  constructor(
      private http : HttpClient
  ) { }
}

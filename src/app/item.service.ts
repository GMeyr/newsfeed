import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import stories from '../assets/stories.json';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems() {
    // Disabled until CORS is enabled on server
    // return this.http.get('http://159.65.229.59/stories');
    return stories;

  }
  constructor(
      private http : HttpClient
  ) { }
}

// Item Data Format:
// {
//     "img":"http:\/\/159.65.229.59\/img\/example\/1.jpg",
//     "title":"What Is 'Social News' on the Internet?",
//     "post":"An increasing number of people are getting their news fixes by turning to what some refer to as 'social news.' An increasing number of people are getting their news fixes by turning to what some refer to as 'social news.'",
//     "post_abbr":"An increasing number of people are getting their news...",
//     "author":"Jordan",
//     "date":"July 2, 2019 12:00:00"
// }

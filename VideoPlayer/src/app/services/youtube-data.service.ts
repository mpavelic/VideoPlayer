import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  constructor(private http : HttpClient) 
  { 

  }
  private url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=conor&key=AIzaSyCg7XtpTfXQ87Med9oWWKmv2ZACTVL-_vM';
  private authTocen = 'AIzaSyCg7XtpTfXQ87Med9oWWKmv2ZACTVL-_vM';	
 
 
  getConfig() {
    return this.http.get(this.url);
  }

}

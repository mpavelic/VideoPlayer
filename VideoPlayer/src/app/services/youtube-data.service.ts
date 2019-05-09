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
  private url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
  private authTocen = 'key=AIzaSyDval-rkh3gH0yr6RqxdQQ0GvOA2HX7dRw';	
 
 
  getYoutubeItemByName(q:string) {
    
    return this.http.get(this.url+q+"&"+this.authTocen);
  }

}

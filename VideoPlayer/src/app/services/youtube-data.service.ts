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
  private iconUrl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=';

  private authTocen = 'key=AIzaSyA7_6UdG-_9ZNJfr2_ZmMFV9qdqs1dizCQ';	

  getYoutubeItemByName(q:string) {
    
    return this.http.get(this.url+q+"&"+this.authTocen);
  }

  getChanelIconByIconId(iconId : string){
    return this.http.get(this.iconUrl+iconId+"&"+this.authTocen);
  }
}

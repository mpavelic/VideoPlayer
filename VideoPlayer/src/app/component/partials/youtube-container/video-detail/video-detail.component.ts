import { Component, OnInit, Input } from '@angular/core';
import { YoutubeItem } from 'src/app/models/youtube-item';
import { Observable, Subscription, Subject } from 'rxjs';
import { YoutubeDataService } from 'src/app/services/youtube-data.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  private eventsSubscription: Subscription;

  videoLoaded: boolean = false;
  allVideoItems: Array<YoutubeItem> = [];
  fakeVideoItems : Array<any> = [];
  selectedVideoItemChanelTitle : string = '';
  selectedVideoItemId : string = '';
  selectedVideoName : string = '';
  selectedVideoDescription : string = '';
  chanelPhotoUrl : string = '';
  selectedChanelId : string = '';
  chanelIconLoaded : string = '';
  player: YT.Player;

  @Input() events: Observable<Array<YoutubeItem>>
  constructor(
    private youtubeService : YoutubeDataService
  ) {
    for (let index = 0; index < 5; index++) {
      this.fakeVideoItems.push(index);
      
    }
   }
   savePlayer(player){
     this.player = player;
     
   }

   eventFromChild(data){
     
    this.player.loadVideoById(data.videoId)
    this.selectedVideoItemChanelTitle = data.chanelTitle;
    this.selectedVideoName = data.title;
    this.selectedVideoDescription = data.description
    this.youtubeService.getChanelIconByIconId(this.selectedChanelId).subscribe(result =>{
      console.log(result);
      
      result['items'].map(item => {
       this.chanelPhotoUrl = item.snippet.thumbnails.default.url;
        
      })
    })
   }
  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(result => {
     
      this.allVideoItems = [];
      this.allVideoItems = result;
      this.videoLoaded = true;
      this.selectedVideoItemId = this.allVideoItems[0].videoId;
      this.selectedVideoItemChanelTitle = this.allVideoItems[0].chanelTitle;
      this.selectedVideoName = this.allVideoItems[0].title;
      this.selectedVideoDescription = this.allVideoItems[0].description
      this.selectedChanelId = this.allVideoItems[0].chanelId;
      
      this.youtubeService.getChanelIconByIconId(this.selectedChanelId).subscribe(result =>{
        console.log(result);
        
        result['items'].map(item => {
         this.chanelPhotoUrl = item.snippet.thumbnails.default.url;
          
        })
      })
      if(!this.player){
        
        return;
      }
      this.player.loadVideoById( this.selectedVideoItemId)
      
     
      
      
    })
  }
 
}

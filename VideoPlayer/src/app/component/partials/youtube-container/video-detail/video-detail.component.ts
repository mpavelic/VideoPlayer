import { Component, OnInit, Input } from '@angular/core';
import { YoutubeItem } from 'src/app/models/youtube-item';
import { Observable, Subscription, Subject } from 'rxjs';

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
  selectedVideoItemId : string = '';
  player: YT.Player;

  @Input() events: Observable<Array<YoutubeItem>>
  constructor(

  ) {
    for (let index = 0; index < 5; index++) {
      this.fakeVideoItems.push(index);
      
    }
   }
   savePlayer(player){
     this.player = player;
     
   }

   eventFromChild(data){
     
    this.player.loadVideoById(data)
   }
  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(result => {
     
      this.allVideoItems = [];
      this.allVideoItems = result;
      this.videoLoaded = true;
      this.selectedVideoItemId = this.allVideoItems[0].videoId
      if(!this.player){
        
        return;
      }
      this.player.loadVideoById( this.selectedVideoItemId)
      
     
      
      
    })
  }
 
}

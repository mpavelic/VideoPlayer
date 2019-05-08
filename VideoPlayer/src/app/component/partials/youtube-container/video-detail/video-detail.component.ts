import { Component, OnInit, Input } from '@angular/core';
import { YoutubeItem } from 'src/app/models/youtube-item';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  private eventsSubscription: Subscription;
  videoLoaded: boolean = false;
  allVideoItems: Array<YoutubeItem> = [];

  @Input() events: Observable<Array<YoutubeItem>>
  constructor() { }

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(result => {
      this.allVideoItems = [];
      this.allVideoItems = result; 
      console.log(this.allVideoItems);
      this.videoLoaded = true;
      
    })
  }

}

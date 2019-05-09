import { Component, OnInit, Input, Output } from '@angular/core';
import { YoutubeItem } from 'src/app/models/youtube-item';
import { EventEmitter } from 'events';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor() { }
  @Input() arrayOfVideos : Array<YoutubeItem>
  @Output() itemSelected = new EventEmitter();

  ngOnInit() {
  }
  selectVideoItem(videoItem: YoutubeItem){
    console.log('da');
    
    this.itemSelected.emit(videoItem.videoId)
  }
}

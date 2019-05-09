import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YoutubeItem } from 'src/app/models/youtube-item';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() arrayOfVideos : Array<YoutubeItem>
  @Output() itemSelected = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }
  
  selectVideoItem(videoItem: YoutubeItem){
    console.log('da');
    
    this.itemSelected.emit(videoItem.videoId)
  }
}

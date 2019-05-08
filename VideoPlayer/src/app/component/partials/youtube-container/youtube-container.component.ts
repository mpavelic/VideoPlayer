import { SearchBarComponent } from './search-bar/search-bar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { YoutubeDataService } from 'src/app/services/youtube-data.service';
import { YoutubeItem } from 'src/app/models/youtube-item';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-youtube-container',
  templateUrl: './youtube-container.component.html',
  styleUrls: ['./youtube-container.component.scss']
})
export class YoutubeContainerComponent implements OnInit {

  constructor(private videoService: YoutubeDataService) { }
  @ViewChild('searchValue') searchValue: SearchBarComponent;
  dataFromChild;
  allVideoItems: Array<YoutubeItem> = [];
  eventsSubject: Subject<Array<YoutubeItem>> = new Subject<Array<YoutubeItem>>();

  emitEventToChild(youtubeItem : Array<YoutubeItem>) {
    this.eventsSubject.next(youtubeItem)
  }
  eventFromChild(data) {
    this.dataFromChild = data;
    console.log(data);

    this.videoService.getYoutubeItemByName(data).subscribe(result => {
      
      this.allVideoItems = [];
      result['items'].map(item => {
        let tempItem = new YoutubeItem();
        tempItem.videoId = item.id.videoId;
        tempItem.chanelId = item.snippet.channelId;
        tempItem.chanelTitle = item.snippet.channelTitle;
        tempItem.title = item.snippet.title;
        tempItem.defaultPicUrl = item.snippet.thumbnails.default.url;
        tempItem.highPicUrl = item.snippet.thumbnails.high.url;
        tempItem.mediumPicUrl = item.snippet.thumbnails.medium.url;
        this.allVideoItems.push(tempItem)
      })
      this.emitEventToChild(this.allVideoItems);

    },
      error => {
        console.log('Error : 400');

      })
  }
  ngOnInit() {

  }




}

// //   this.videoService.getYoutubeItem().subscribe(result =>{
// //     console.log(result);

// //     result['items'].map(item => {
// //       let tempItem = new YoutubeItem();
// //       tempItem.videoId = item.id.videoId;
// //       tempItem.chanelId = item.snippet.channelId;
// //       tempItem.chanelTitle = item.snippet.channelTitle;
// //       tempItem.title = item.snippet.title;
// //       tempItem.defaultPicUrl = item.snippet.thumbnails.default.url;
// //       tempItem.highPicUrl = item.snippet.thumbnails.high.url;
// //       tempItem.mediumPicUrl = item.snippet.thumbnails.medium.url;
// //       this.allVideoItems.push(tempItem)
// //     })
// //     console.log(this.allVideoItems);

// //   },
// //   error =>{
// //     console.log('Error : 400');

// //   })
// // }

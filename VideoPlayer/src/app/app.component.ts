import { YoutubeDataService } from './services/youtube-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VideoPlayer';
  constructor(private videoService: YoutubeDataService){

  }

}

import { Component, OnInit } from '@angular/core';
import { YoutubeDataService } from 'src/app/services/youtube-data.service';
import { YoutubeItem } from 'src/app/models/youtube-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private videoService: YoutubeDataService) { }
  allVideoItems : Array <YoutubeItem> = [];
  ngOnInit() {
   

  }

  
}

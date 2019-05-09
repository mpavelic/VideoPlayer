import { HomeComponent } from './component/views/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeContainerComponent } from './component/partials/youtube-container/youtube-container.component';
import { SearchBarComponent } from './component/partials/youtube-container/search-bar/search-bar.component';
import { VideoDetailComponent } from './component/partials/youtube-container/video-detail/video-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { VideoListComponent } from './component/partials/youtube-container/video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    YoutubeContainerComponent,

    SearchBarComponent,

    VideoDetailComponent,

    VideoListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

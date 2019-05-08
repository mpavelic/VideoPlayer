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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    YoutubeContainerComponent,

    SearchBarComponent,

    VideoDetailComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

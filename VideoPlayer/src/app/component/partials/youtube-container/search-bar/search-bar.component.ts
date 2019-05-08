import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() searchClicked = new EventEmitter();

  constructor(private fb: FormBuilder) { }
  searchForm = this.fb.group({
    search : ['', Validators.required]
  })
  ngOnInit() {
  
  }



  SearchYoutubeService(){
    this.searchClicked.emit(this.searchForm.controls.search.value)
  }
}

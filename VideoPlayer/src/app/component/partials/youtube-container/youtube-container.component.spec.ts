import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeContainerComponent } from './youtube-container.component';

describe('YoutubeContainerComponent', () => {
  let component: YoutubeContainerComponent;
  let fixture: ComponentFixture<YoutubeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNewsCardComponent } from './featured-news-card.component';

describe('FeaturedNewsCardComponent', () => {
  let component: FeaturedNewsCardComponent;
  let fixture: ComponentFixture<FeaturedNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedNewsCardComponent]
    });
    fixture = TestBed.createComponent(FeaturedNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonViewMoreComponent } from './button-view-more.component';

describe('ButtonViewMoreComponent', () => {
  let component: ButtonViewMoreComponent;
  let fixture: ComponentFixture<ButtonViewMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonViewMoreComponent]
    });
    fixture = TestBed.createComponent(ButtonViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvapopupComponent } from './off-canvapopup.component';

describe('OffCanvapopupComponent', () => {
  let component: OffCanvapopupComponent;
  let fixture: ComponentFixture<OffCanvapopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffCanvapopupComponent]
    });
    fixture = TestBed.createComponent(OffCanvapopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

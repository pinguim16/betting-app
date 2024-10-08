import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetDetailComponent } from './bet-detail.component';

describe('BetDetailComponent', () => {
  let component: BetDetailComponent;
  let fixture: ComponentFixture<BetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

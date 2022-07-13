import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidiasNavigationBarComponent } from './lidias-navigation-bar.component';

describe('LidiasNavigationBarComponent', () => {
  let component: LidiasNavigationBarComponent;
  let fixture: ComponentFixture<LidiasNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LidiasNavigationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LidiasNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

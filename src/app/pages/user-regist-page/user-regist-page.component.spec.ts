import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistPageComponent } from './user-regist-page.component';

describe('UserRegistPageComponent', () => {
  let component: UserRegistPageComponent;
  let fixture: ComponentFixture<UserRegistPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegistPageComponent]
    });
    fixture = TestBed.createComponent(UserRegistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

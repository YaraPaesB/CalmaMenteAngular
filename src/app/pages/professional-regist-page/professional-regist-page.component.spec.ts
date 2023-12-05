import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalRegistPageComponent } from './professional-regist-page.component';

describe('ProfessionalRegistPageComponent', () => {
  let component: ProfessionalRegistPageComponent;
  let fixture: ComponentFixture<ProfessionalRegistPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalRegistPageComponent]
    });
    fixture = TestBed.createComponent(ProfessionalRegistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

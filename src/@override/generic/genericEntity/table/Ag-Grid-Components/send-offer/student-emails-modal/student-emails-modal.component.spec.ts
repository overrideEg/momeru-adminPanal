import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmailsModalComponent } from './student-emails-modal.component';

describe('StudentEmailsModalComponent', () => {
  let component: StudentEmailsModalComponent;
  let fixture: ComponentFixture<StudentEmailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEmailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

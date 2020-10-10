import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorLocalizedComponent } from './editor-localized.component';

describe('EditorLocalizedComponent', () => {
  let component: EditorLocalizedComponent;
  let fixture: ComponentFixture<EditorLocalizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorLocalizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorLocalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

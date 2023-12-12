import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExamsComponent } from './page-exams.component';

describe('PageExamsComponent', () => {
  let component: PageExamsComponent;
  let fixture: ComponentFixture<PageExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

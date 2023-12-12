import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAttentionsComponent } from './page-attentions.component';

describe('PageAttentionsComponent', () => {
  let component: PageAttentionsComponent;
  let fixture: ComponentFixture<PageAttentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAttentionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAttentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtLegalComponent } from './ext-legal.component';

describe('ExtLegalComponent', () => {
  let component: ExtLegalComponent;
  let fixture: ComponentFixture<ExtLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtPrivacyComponent } from './ext-privacy.component';

describe('ExtPrivacyComponent', () => {
  let component: ExtPrivacyComponent;
  let fixture: ComponentFixture<ExtPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtPrivacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

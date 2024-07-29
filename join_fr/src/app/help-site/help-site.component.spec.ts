import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSiteComponent } from './help-site.component';

describe('HelpSiteComponent', () => {
  let component: HelpSiteComponent;
  let fixture: ComponentFixture<HelpSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule, ClrAlert, ClrAlertItem, ClrAlerts } from '@clr/angular';

import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [AlertsComponent]
    })
      .overrideTemplate(ClrAlerts, '')
      .overrideTemplate(ClrAlert, '')
      .overrideTemplate(ClrAlertItem, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

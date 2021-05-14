import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NotificationService } from '../modules/data/app-services/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../modules/data/payload-services/data.service';
import { BehaviorSubject } from 'rxjs';

const mockList = [
  {description: 'Signal Degrade', severity: 'CRITICAL', nodeType: 'MONITOR'},
  {description: 'Signal Degrade', severity: 'MAJOR', nodeType: 'TMFSERVICE'}
];
class notificationServiceSpy {
  private headerAlarmData = new BehaviorSubject<any>(mockList);
  headerAlarmList = this.headerAlarmData.asObservable();
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientModule],
      providers: [
        ConfirmationService, 
        { provide: NotificationService, useClass: notificationServiceSpy }, 
        MessageService,
        DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.nav-content span').textContent).toEqual('Welcome Dipanshu Kocher');
  });

  it('it should check header alarm list is updated via service subscription' , () => {
    component.ngOnInit();
    const expectedData = {description: 'Signal Degrade', severity: 'CRITICAL', nodeType: 'MONITOR'};
    expect(component.headerAlarms[0]).toEqual(expectedData);
  });

  it('it should check severity alarm class code via util function' , () => {
    component.ngOnInit();
    const severityData = 'CRITICAL';
    expect(component.getRowClass(severityData)).toEqual('critical-alarm');
  });
});

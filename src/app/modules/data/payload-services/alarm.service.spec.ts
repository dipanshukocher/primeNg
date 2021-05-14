import { TestBed } from '@angular/core/testing';

import { AlarmService } from './alarm.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('AlarmService', () => {
  let service: AlarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService, AlarmService]
    });
    service = TestBed.inject(AlarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

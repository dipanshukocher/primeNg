import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../payload-services/data.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService, NotificationService]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

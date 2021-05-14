import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { DataService } from '../payload-services/data.service';
import { Alarm } from '../../../app.model';

@Injectable()
export class NotificationService {
  public headerAlarmList = new Subject<any>();
  constructor(private http: HttpClient, private dataService: DataService) { }
  url: string = 'assets/dummy1.json';
  updateHeaderCard(list: any) {
    this.headerAlarmList.next(list);
  }

  getDummyData(): Observable<Alarm[]> {
    return this.dataService.get(this.url);
  }
}

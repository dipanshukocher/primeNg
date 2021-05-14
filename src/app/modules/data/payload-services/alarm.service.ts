import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alarm } from './../../../app.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  url: string = 'assets/dummy1.json';
  constructor(private dataService: DataService) { }

  getDummyData(): Observable<Alarm[]> {
    return this.dataService.get(this.url);
  }
}

import { Component, OnInit } from '@angular/core';
import { Menu, AlarmsTypes } from '../app.model';
import { MenuItem, Message } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DataService } from '../modules/data/payload-services/data.service';
import { NotificationService } from '../modules/data/app-services/notification.service';
import { getRowClass } from '../modules/utils/grid-utils';
import { AlarmService } from '../modules/data/payload-services/alarm.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tableUnchangesData: any;
  msgs: Message[] = [];
  items: MenuItem[];
  menu: Menu[];
  selectedMenu: Menu;
  tableAlarms;
  tableDataObs: Subscription;
  selectedAlarm:any;
  tab = 0;
  majorCount = 0;
  criticalCount = 0;
  chartOptions: any;
  chartData: any;
  constructor(
    private dataService: DataService,
    private notificationService: NotificationService,
    private alarmService: AlarmService
  ) { }

  ngOnInit(): void {
    this.menu = [
      {name: AlarmsTypes.CRITICAL, code: 'AL1'},
      {name: AlarmsTypes.MAJOR, code: 'AL2'},
      {name: AlarmsTypes.MINOR, code: 'AL3'}
    ];
    this.getData();
  }

  getData(): void {
    this.tableDataObs = this.alarmService.getDummyData()
    .subscribe(res=> {
      this.tableUnchangesData = JSON.parse(JSON.stringify(res));
      const majors = [];
      const criticals = [];
      res.forEach(al => {
        if (al.severity === AlarmsTypes.CRITICAL) {
          criticals.push(al);
        } else if (al.severity === AlarmsTypes.MAJOR) {
          majors.push(al);
        }
      });
      this.majorCount = majors.length;
      this.criticalCount = criticals.length;
      this.tableAlarms = res;
      this.updateChart(res);
    });
  }

  onChangeTabView(e) {
    this.tab = e.index;
    switch(e.index) {
      case 0 :
      case 1 :
        this.tableAlarms = this.tableUnchangesData;
        break;
      case 2:
        this.tableAlarms = this.tableUnchangesData.filter(e => { return e.severity === AlarmsTypes.MAJOR})
        break;
      case 3:
        this.tableAlarms = this.tableUnchangesData.filter(e => { return e.severity === AlarmsTypes.CRITICAL})
        break;
      default:
        // code block
    }
    this.updateChart(this.tableAlarms);
  }

  updateChart(chartData): void {
    let chartDataSet = [];
    let chartLabels = [];
    let chartColors = [];
    let chartSet = new Map();
    chartData.forEach(al => {
      const colorCode = al.severity === AlarmsTypes.CRITICAL ? AlarmsTypes.CRITICALCOLOR : al.severity === AlarmsTypes.MAJOR ? AlarmsTypes.MAJORCOLOR : AlarmsTypes.MINORCOLOR;
      if (chartSet.has(al.severity)) {
        const previousSeverityValue = chartSet.get(al.severity)['value'];
        chartSet.set(al.severity, { value: parseInt(al.severityValue) + parseInt(previousSeverityValue), color: colorCode});
      } else {
        chartSet.set(al.severity, { value: al.severityValue, color: colorCode});
      }
    });
    if (chartSet.size) {
      chartSet.forEach((value, key) => {
        chartLabels.push(key);
        chartDataSet.push(value['value']);
        chartColors.push(value['color']);
      });
    }
    this.chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: 'Severity',
          backgroundColor: chartColors,
          data: chartDataSet
        },
      ]
    };
  }

  confirmMenu(selectedMenu): void {
    if (selectedMenu) {
      this.msgs = [{severity:'info', summary:'Message', detail: `${selectedMenu.name} has been activated`}];
    }
  }

  onRowSelect(ev): void {
    this.notificationService.updateHeaderCard(this.selectedAlarm);
  }

  getRowClass(severityType) {
    if (!this.tab) {
      return getRowClass(severityType);
    }
  }

  ngOnDestroy() {
    this.tableDataObs.unsubscribe();
  }
}

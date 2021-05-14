import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts',
  template: '<p-chart [type]="chartType" [data]="chartData" [options]="chartOptions"></p-chart>',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() chartType: string;
  @Input() chartData: string;
  @Input() chartOptions: string;
  constructor() { }

  ngOnInit(): void {
  }

}

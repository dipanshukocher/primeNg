import { Component, OnInit } from '@angular/core';
import { Menu, AlarmsTypes } from './../../app.model';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  menu: Menu[];
  msgs: Message[] = [];
  selectedMenu: Menu;
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {name: AlarmsTypes.CRITICAL, code: 'AL1'},
      {name: AlarmsTypes.MAJOR, code: 'AL2'},
      {name: AlarmsTypes.MINOR, code: 'AL3'}
    ];
  }

  confirmMenu(selectedMenu): void {
    if (selectedMenu) {
      this.msgs = [{severity:'info', summary:'Message', detail: `${selectedMenu.name} has been activated`}];
    }
  }

}

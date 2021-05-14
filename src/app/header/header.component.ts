import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Message, MessageService} from 'primeng/api';
import { NotificationService } from '../modules/data/app-services/notification.service';
import { getRowClass } from '../modules/utils/grid-utils';
interface Menu {
  name: string,
  code: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  msgs: Message[];
  headerAlarms = [];
  userName = 'Dipanshu Kocher';
  menu: Menu[];
  constructor(
    private confirmationService: ConfirmationService,
    private notificationService: NotificationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.notificationService.headerAlarmList.subscribe(res => {
      this.headerAlarms = res;
    });
  }

  confirmLogout() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to leave this page ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{severity:'success', summary:'Success', detail: `You are successfully logged out.`}];
      },
      reject: () => {}
    });
  }

  getRowClass(severityType) {
    return getRowClass(severityType);
  }

}

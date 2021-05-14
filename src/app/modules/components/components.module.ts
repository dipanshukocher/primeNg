import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule} from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ChartsComponent } from './charts/charts.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [ChartsComponent, ButtonComponent, DropdownComponent],
  imports: [
    CommonModule,
    FormsModule,

    MenubarModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    DropdownModule,
    TabViewModule,
    ConfirmDialogModule,
    MessagesModule,
    OverlayPanelModule,
    ToastModule,
    TableModule,
    CardModule,
    ChartModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    DropdownModule,
    TabViewModule,
    ConfirmDialogModule,
    MessagesModule,
    OverlayPanelModule,
    ToastModule,
    TableModule,
    CardModule,
    ChartModule,

    ChartsComponent,
    ButtonComponent,
    DropdownComponent
  ]

})
export class ComponentsModule { }

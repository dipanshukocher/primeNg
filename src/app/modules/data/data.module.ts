import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './payload-services/data.service';
import { NotificationService } from './app-services/notification.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DataService, NotificationService],
  exports: [HttpClientModule]
})
export class DataModule { }

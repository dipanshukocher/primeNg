import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';
import { DataModule } from './modules/data/data.module';
import { ComponentsModule } from './modules/components/components.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './main/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DataModule,
    ComponentsModule
  ],
  providers: [ConfirmationService, { provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }

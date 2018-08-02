import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { UserService } from './core/services/user.service';
import { ExpenseService } from './core/services/expense.service';
import { NewuserDialogComponent } from './shared/dialog/newuser-dialog/newuser-dialog.component';
import { AdduserDialogComponent } from './shared/dialog/adduser-dialog/adduser-dialog.component';
import { SettingsService } from './core/services/settings.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { SharedModule } from './shared/app.shared.module';
import { DataShareService } from './core/services/datashare.service';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { TableViewComponent } from './table-view/table-view.component';



@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DashboardComponent,
    ChartViewComponent,
    CalendarViewComponent,
    TimelineViewComponent,
    TableViewComponent,
    NewuserDialogComponent,
    AdduserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [SettingsService, UserService, ExpenseService, DataShareService,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [NewuserDialogComponent, AdduserDialogComponent]
})
export class AppModule { }

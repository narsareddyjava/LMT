import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainReportComponent } from './dash-contents/report-contents/main-report/main-report.component';
import { LeaverequestperiodComponent } from './dash-contents/report-contents/leaverequestperiod/leaverequestperiod.component';
import { CalendarHeaderComponent } from './dash-contents/calendar-contents/calender-header/calender-header.component';
import { DashCalendarComponent } from './dash-contents/calendar-contents/dash-calendar/dash-calendar.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { EmployeeDetailsComponent } from './employee-contents/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-contents/employee-list/employee-list.component';
import { EmployeeMainComponent } from './employee-contents/employee-main/employee-main.component';
import { EmployeeManageComponent } from './employee-contents/employee-manage/employee-manage.component';
import { EventDetailsComponent } from './eventsContents/event-details/event-details.component';
import { EventListComponent } from './eventsContents/event-list/event-list.component';
import { EventMainComponent } from './eventsContents/event-main/event-main.component';
import { EventManageComponent } from './eventsContents/event-manage/event-manage.component';
import { LeaverequestDetailsComponent } from './leaverequest-contents/leaverequest-details/leaverequest-details.component';
import { LeaverequestListComponent } from './leaverequest-contents/leaverequest-list/leaverequest-list.component';
import { LeaverequestMainComponent } from './leaverequest-contents/leaverequest-main/leaverequest-main.component';
import { LeaverequestManageComponent } from './leaverequest-contents/leaverequest-manage/leaverequest-manage.component';
import { LeavetypeDetailsComponent } from './leavetype-contents/leavetype-details/leavetype-details.component';
import { LeavetypeListComponent } from './leavetype-contents/leavetype-list/leavetype-list.component';
import { LeavetypeMainComponent } from './leavetype-contents/leavetype-main/leavetype-main.component';
import { LeavetypeManageComponent } from './leavetype-contents/leavetype-manage/leavetype-manage.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MyProfileComponent } from './profile-contents/my-profile/my-profile.component';



@NgModule({
  declarations: [MainReportComponent, LeaverequestperiodComponent, DashCalendarComponent, DashHomeComponent, EmployeeDetailsComponent, EmployeeListComponent, EmployeeMainComponent, EmployeeManageComponent, EventDetailsComponent, EventListComponent, EventMainComponent, EventManageComponent, LeaverequestDetailsComponent, LeaverequestListComponent, LeaverequestMainComponent, LeaverequestManageComponent, LeavetypeDetailsComponent, LeavetypeListComponent, LeavetypeMainComponent, LeavetypeManageComponent, MainLayoutComponent, MyProfileComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

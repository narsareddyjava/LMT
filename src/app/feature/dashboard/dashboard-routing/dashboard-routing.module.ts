import { Routes, RouterModule } from '@angular/router';import { DashHomeComponent } from '../dash-home/dash-home.component';import { AdminAuthGuard } from '../auth/adminAuth.guard';import { NgModule } from '@angular/core';import { CommonModule } from '@angular/common';
import { EmployeeMainComponent } from '../employee-contents/employee-main/employee-main.component';
import { EmployeeListComponent } from '../employee-contents/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-contents/employee-details/employee-details.component';
import { EmployeeManageComponent } from '../employee-contents/employee-manage/employee-manage.component';
import { LeaverequestMainComponent } from '../leaverequest-contents/leaverequest-main/leaverequest-main.component';
import { LeaverequestListComponent } from '../leaverequest-contents/leaverequest-list/leaverequest-list.component';
import { LeaverequestDetailsComponent } from '../leaverequest-contents/leaverequest-details/leaverequest-details.component';
import { LeaverequestManageComponent } from '../leaverequest-contents/leaverequest-manage/leaverequest-manage.component';
import { LeavetypeMainComponent } from '../leavetype-contents/leavetype-main/leavetype-main.component';
import { LeavetypeListComponent } from '../leavetype-contents/leavetype-list/leavetype-list.component';
import { LeavetypeDetailsComponent } from '../leavetype-contents/leavetype-details/leavetype-details.component';
import { LeavetypeManageComponent } from '../leavetype-contents/leavetype-manage/leavetype-manage.component';
import { EventListComponent } from '../eventsContents/event-list/event-list.component';
import { EventDetailsComponent } from '../eventsContents/event-details/event-details.component';
import { EventManageComponent } from '../eventsContents/event-manage/event-manage.component';
import { EventMainComponent } from '../eventsContents/event-main/event-main.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { MyProfileComponent } from '../profile-contents/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
        { path: '', component: DashHomeComponent },
        {
          path: 'employees',
          component: EmployeeMainComponent,
          children: [
            {path: '', redirectTo: 'details', pathMatch: 'full'},
            {path: 'details', component: EmployeeListComponent},
            {path: 'details/:id', component: EmployeeDetailsComponent},
            {path: 'new', component: EmployeeManageComponent, canActivate: [AdminAuthGuard]}
          ]
        },
        {
          path: 'leaverequests',
          component: LeaverequestMainComponent,
          children: [
            {path: '', redirectTo: 'details', pathMatch: 'full'},
            {path: 'details', component: LeaverequestListComponent},
            {path: 'details/:id', component: LeaverequestDetailsComponent},
            {path: 'new', component: LeaverequestManageComponent}
          ]
        },
        {
          path: 'leavetypes',
          component: LeavetypeMainComponent,
          children: [
            {path: '', redirectTo: 'details', pathMatch: 'full'},
            {path: 'details', component: LeavetypeListComponent},
            {path: 'details/:id', component: LeavetypeDetailsComponent},
            {path: 'new', component: LeavetypeManageComponent, canActivate: [AdminAuthGuard]}
          ]
        },
        {
          path: 'event',
          component: EventMainComponent,
          children: [
            {path: '', redirectTo: 'details', pathMatch: 'full'},
            {path: 'details', component: EventListComponent},
            {path: 'details/:id', component: EventDetailsComponent},
            {path: 'new', component: EventManageComponent, canActivate: [AdminAuthGuard]}
          ]
        },
        { path: 'profile', component: MyProfileComponent },
    ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
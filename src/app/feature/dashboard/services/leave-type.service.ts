import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { LeaveType } from '../model/leaveType';
import { Constant } from '../constant/constant';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('LeaveType api error ', error);
    return throwError(error);
  }

  getAllLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(Constant.API_ENDPOINT + '/rest/leave-types')
      .pipe(catchError(this.errorHandler));
  }

  getLeaveTypeById(id): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(Constant.API_ENDPOINT + '/rest/leave-types/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getLeaveTypeByUserId(id): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(Constant.API_ENDPOINT + '/rest/leave-types/user/' + id)
      .pipe(catchError(this.errorHandler));
  }

  createLeaveType(LeaveTypeData): Observable<LeaveType[]> {
    return this.http.post<any>(Constant.API_ENDPOINT + '/rest/leave-types', LeaveTypeData)
      .pipe(catchError(this.errorHandler));
  }

  updateLeaveType(LeaveTypeData): Observable<LeaveType[]> {
    return this.http.put<any>(Constant.API_ENDPOINT + '/rest/leave-types', LeaveTypeData)
      .pipe(catchError(this.errorHandler));
  }

  deleteLeaveType(id): Observable<LeaveType[]> {
    return this.http.delete<any>(Constant.API_ENDPOINT + '/rest/leave-types/' + id)
      .pipe(catchError(this.errorHandler));
  }

  searchByLeaveType(typeName): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(Constant.API_ENDPOINT + '/rest/leave-types/search',
      {
        params: {
          q: typeName
        }
      })
      .pipe(catchError(this.errorHandler));
  }

}

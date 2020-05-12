import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Constant } from '../constant/constant';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('LeaveType api error ', error);
    return throwError(error);
  }

  getLeaveReport(): Observable<any> {
    return this.http.get<any>(Constant.API_ENDPOINT + '/rest/reports/leaveReport')
      .pipe(catchError(this.errorHandler));
  }
  
}

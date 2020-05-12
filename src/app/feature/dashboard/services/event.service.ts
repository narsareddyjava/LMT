import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Constant } from '../constant/constant';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('Event api error ', error);
    return throwError(error);
  }

  getAllEvents(page, size, sort): Observable<any> {
    return this.http.get<Event[]>(Constant.API_ENDPOINT + '/rest/events',
    {
      params: {
        page: page,
        size: size,
        sort: sort
      }
    })
      .pipe(catchError(this.errorHandler));
  }

  getEventById(id): Observable<Event[]> {
    return this.http.get<Event[]>(Constant.API_ENDPOINT + '/rest/events/' + id)
      .pipe(catchError(this.errorHandler));
  }


  createEvent(EventData): Observable<Event[]> {
    return this.http.post<any>(Constant.API_ENDPOINT + '/rest/events', EventData)
      .pipe(catchError(this.errorHandler));
  }

  updateEvent(EventData): Observable<Event[]> {
    return this.http.put<any>(Constant.API_ENDPOINT + '/rest/events', EventData)
      .pipe(catchError(this.errorHandler));
  }

  getLeaveAndEventsBetweenDate(startDate, endDate): Observable<any> {
    return this.http.get<Event[]>(Constant.API_ENDPOINT + '/rest/events/byDate',
    {
      params: {
        date1: startDate,
        date2: endDate
      }
    })
      .pipe(catchError(this.errorHandler));
  }
}
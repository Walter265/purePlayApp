import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(`${environment.moviesUrl}`);
  }

  getUniversities(): Observable<any> {
    return this.http.get(`${environment.universitiesUrl}`);
  }
}

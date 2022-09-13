import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  contactSubmission(body: {name: string, email: string, text: string}) {
    return this.http.post(`${environment.api}/email`, body)
  }
}

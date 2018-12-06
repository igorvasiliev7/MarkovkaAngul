import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Call} from '../model/call';

const API = 'http://localgost:8080/api';

@Injectable()
export class CallService {

  constructor(private http: HttpClient) {
  }

  public findCalls(): Observable<Call> {
    return this.http.get<Call>(`${API}/calls/`);
  }
}

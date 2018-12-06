import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Visit} from '../model/visit';

const API = 'http://localgost:8080/api';

@Injectable()
export class VisitService {

  constructor(private http: HttpClient) {
  }

  public findVisits(): Observable<Visit> {
    return this.http.get<Visit>(`${API}/visits/`);
  }
}

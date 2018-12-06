import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client';

const API = 'http://localgost:8080/api';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public findClients(): Observable<Client> {
    return this.http.get<Client>(`${API}/clients/`);
  }
}

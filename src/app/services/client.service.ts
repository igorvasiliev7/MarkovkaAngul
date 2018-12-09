import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ClientDto} from '../model/clientDto';

const API = 'http://localhost:8080/api';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public findClientsDto(): Observable<ClientDto> {
    return this.http.get<ClientDto>(`${API}/clients/findAllDto`);
  }
}

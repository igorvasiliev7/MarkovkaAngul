import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {ClientDto} from "../model/clientDto";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: ClientDto;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.findClientsDto().subscribe((s: ClientDto) => this.clients = s);
  }

}

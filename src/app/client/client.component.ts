import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.findClients().subscribe((s: Client) => this.clients = s);
  }

}

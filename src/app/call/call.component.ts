import { Component, OnInit } from '@angular/core';
import {Call} from '../model/call';
import {CallService} from '../services/call.service';


@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  calls: Call;
  constructor(private callService: CallService) { }

  ngOnInit() {
    this.callService.findCalls().subscribe((s: Call) => this.calls = s);
  }

}
